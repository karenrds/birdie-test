import * as actions from './postActions';
import * as actionTypes from './types';


describe('recipients actions', () => {
    it('should create an action to request all the recipients', () => {
        const posts = [{"care_recipient_id":"df50cac5d"},{"care_recipient_id":"e3e2bff8"},{"care_recipient_id":"ad3512a6"}];
        const expectedAction = {
            type: actionTypes.FETCH_DATA
        }
        expect(actions.fetchPosts(posts)).expectedAction;
    });
    it('should create an action to get new recipient ', () => {
        const post = [{"id":"0011","event_type":"fluid","visit_id":"wer","timestamp":"2019-04-26T07:08:21.758Z","caregiver_id":"cd1b"}];
        const expectedAction = {
            type: actionTypes.NEW_DATA
        }
        expect(actions.createPost(post)).expectedAction;
    });
})
