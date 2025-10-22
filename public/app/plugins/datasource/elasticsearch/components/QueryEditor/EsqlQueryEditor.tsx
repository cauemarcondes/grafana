import { TextArea } from '@grafana/ui';

import { useDispatch } from '../../hooks/useStatelessReducer';

import { useQuery } from './ElasticsearchQueryContext';
import { changeESQLQuery } from './state';

export function EsqlQueryEditor() {
  const dispatch = useDispatch();
  const query = useQuery();

  return (
    <TextArea
      value={query.esqlQuery || ''}
      onChange={(e) => {
        dispatch(changeESQLQuery(e.currentTarget.value));
      }}
      placeholder="Enter an ES|QL query (e.g., FROM logs-* | LIMIT 10)"
      rows={10}
    />
  );
}
