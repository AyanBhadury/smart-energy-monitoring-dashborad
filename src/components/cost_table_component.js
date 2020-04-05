import React from 'react';


class CostTableComponent extends React.Component {

    render() {
        return (<div>

            <div className="col-lg-12">
                <div id="cost-elements" className="row card-group pt-3 pb-5">

                    <div className="text-center col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="card-block">
                            <h4 id="co-tablecell-title1" className="kpi-title">Title1</h4>
                            <div id="co-tablecell-value1" className="kpi-content"></div>
                        </div>
                    </div>
                    <div className="text-center col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="card-block">
                            <h4 id="co-tablecell-title2" className="kpi-title">Title 2</h4>
                            <div id="co-tablecell-value2" className="kpi-content"></div>
                        </div>
                    </div>
                    <div className="text-center col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="card-block">
                            <h4 id="co-tablecell-title3" className="kpi-title">Title 3</h4>
                            <div id="co-tablecell-value3" className="kpi-content"></div>
                        </div>
                    </div>
                    <div className="text-center col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="card-block">
                            <h4 id="co-tablecell-title4" className="kpi-title">Title 4</h4>
                            <div id="co-tablecell-value4" className="kpi-content"></div>
                        </div>
                    </div>
                </div>
            </div>



        </div>);
    }
}

export default CostTableComponent;