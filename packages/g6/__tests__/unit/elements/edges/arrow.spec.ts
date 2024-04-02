import { elementEdgeArrow } from '@/__tests__/demos';
import { createDemoGraph } from '@@/utils';

describe('element edge arrow', () => {
  it('render', async () => {
    const graph = await createDemoGraph(elementEdgeArrow);
    await expect(graph).toMatchSnapshot(__filename);

    graph.destroy();
  });
});
