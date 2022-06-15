import { addBugs, loadBugs, resolveBug, getUnresolvedBugs } from '../bugs';
import configureStore from '../../configureStore';
import axios from 'axios';

xdescribe('bugSlice', () => {
    let fakeAxios: any;
    let store: any;

    beforeEach(() => {
        fakeAxios = new MockAxiosAdapter(axios);
        store = configureStore();
    });

    const bugSlice = () => store.getState().ui.bugs;
    const createState = () => ({ ui: { bugs: { list: [] } } });

    describe('load', () => {
        it('should load all bug if the server response is success', async () => {
            const savedBugs = [
                { id: 1, description: 'a' },
                { id: 2, description: 'b' },
            ];
            fakeAxios.onGet('/bugs').reply(200, savedBugs);

            await store.dispatch(loadBugs());

            expect(bugSlice().list).toHaveLength(2);
        });

        it('should not load all bug if the server response is unsuccess', async () => {
            fakeAxios.onGet('/bugs').reply(500);

            await store.dispatch(loadBugs());

            expect(bugSlice().list).toHaveLength(0);
        });
    });

    describe('update', () => {
        it('should mark as resolved, if the server returns success', async () => {
            fakeAxios.onPost('/bugs').reply(200, { id: 1, resolved: false });
            fakeAxios.onPatch('/bugs/1').reply(200, { id: 1, resolved: true });

            await store.dispatch(addBugs());
            await store.dispatch(resolveBug(1));

            expect(bugSlice().list[0].resolved).toEqual(true);
        });

        it('should not mark as resolved, if the server returns success', async () => {
            fakeAxios.onPost('/bugs').reply(200, { id: 1, resolved: false });
            fakeAxios.onPatch('/bugs/1').reply(500);

            await store.dispatch(addBugs());
            await store.dispatch(resolveBug(1));

            expect(bugSlice().list[0].resolved).toEqual(false);
        });
    });

    describe('selectors', () => {
        it('getUnresolvedBugs', async () => {
            let state = createState();
            state.ui.bugs.list = [
                { id: 1, resolved: true },
                { id: 2, resolved: false },
                { id: 3, resolved: false },
            ];

            let result = getUnresolvedBugs(state);

            expect(result).toHaveLength(2);
        });
    });

    describe('post', () => {
        it('should add bug to store if the server response is success', async () => {
            const bug = { description: 'a' };
            const savedBug = { ...bug, id: 1 };
            fakeAxios.onPost('/bugs').reply(200, savedBug);

            await store.dispatch(addBugs(bug));

            expect(bugSlice().list).toContainEqual(savedBug);
        });

        it('should not add bug to store if the server response is unsuccess', async () => {
            const bug = { description: 'a' };
            fakeAxios.onPost('/bugs').reply(500);

            await store.dispatch(addBugs(bug));

            expect(bugSlice().list).toHaveLength(0);
        });
    });
});
