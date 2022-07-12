import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "c1", x: 0, y: 0, w: 1, h: 1 ,static:false},
  { i: "c2", x: 1, y: 0, w: 1, h: 1,static:false },
  { i: "c3", x: 2, y: 0, w: 1, h: 1 ,static:false},
  { i: "c4", x: 3, y: 0, w: 1, h: 1 ,static:false},
  { i: "c5", x: 4, y: 0, w: 1, h: 1 ,static:false}
];


const getLayouts = () => {
  const savedLayouts = localStorage.getItem("grid-layout");

  return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

export const Grid = () => {
  const handleLayoutChange = (layout, layouts) => {
  localStorage.setItem("grid-layout", JSON.stringify(layouts));
};

return (
  <div className="root">
    <ResponsiveGridLayout
    
      layouts={getLayouts()}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={300}
      width={1000}
      isResizable={true}
      autoSize={true}

      onLayoutChange={handleLayoutChange}
    >
      <div className="grid-wrapper" key="c1">
        <div className="grid-item-content">content 1</div>
      </div>
      <div className="grid-wrapper" key="c2">
        <div>content 2</div>
      </div>
      <div className="grid-wrapper" key="c3">
        <div>content 3</div>
      </div>
      <div className="grid-wrapper" key="c4">
        <div>content 4</div>
      </div>
      <div className="grid-wrapper" key="c5">
        <div>content 5</div>
      </div>
    </ResponsiveGridLayout>
  </div>
);
};
