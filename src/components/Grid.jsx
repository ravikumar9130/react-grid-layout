import { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "c1", x: 0, y: 0, w: 1, h: 1 },
  { i: "c2", x: 1, y: 0, w: 1, h: 1 },
  { i: "c3", x: 2, y: 0, w: 1, h: 1 },
  { i: "c4", x: 3, y: 0, w: 1, h: 1 },
  { i: "c5", x: 4, y: 0, w: 1, h: 1 }
];
const GridItemWrapper = styled.div`
  background: #f5f5f5;
`;

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;

const getLayouts = () => {
  const savedLayouts = localStorage.getItem("grid-layout");

  return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

export const Grid = () => {
  const handleLayoutChange = (layout, layouts) => {
  localStorage.setItem("grid-layout", JSON.stringify(layouts));
};

return (
  <Root>
    <ResponsiveGridLayout
      layouts={getLayouts()}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={300}
      width={1000}
      onLayoutChange={handleLayoutChange}
    >
      <GridItemWrapper key="c1">
        <GridItemContent>content 1</GridItemContent>
      </GridItemWrapper>
      <GridItemWrapper key="c2">
        <GridItemContent>content 2</GridItemContent>
      </GridItemWrapper>
      <GridItemWrapper key="c3">
        <GridItemContent>content 3</GridItemContent>
      </GridItemWrapper>
      <GridItemWrapper key="c4">
        <GridItemContent>content 4</GridItemContent>
      </GridItemWrapper>
      <GridItemWrapper key="c5">
        <GridItemContent>content 5</GridItemContent>
      </GridItemWrapper>
    </ResponsiveGridLayout>
  </Root>
);
};
