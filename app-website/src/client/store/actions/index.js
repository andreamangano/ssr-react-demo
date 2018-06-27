export const FETCH_RESOURCES = 'fetch_resources';
export const FETCH_SINGLE_RESOURCE = 'fetch_resource';

export const fetchResources = () => async (dispatch, getState, api) => {
  const res = await api.get('/resources');

  dispatch({
    type: FETCH_RESOURCES,
    payload: res
  });
};

export const fetchSingleResource = ({ slug }) => async (dispatch, getState, api) => {
  const res = await api.get(`/resource/${slug}`);

  dispatch({
    type: FETCH_SINGLE_RESOURCE,
    payload: res
  });
};
