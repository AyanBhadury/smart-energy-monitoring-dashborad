import React from 'react';
//import ReactDOM from 'react-dom';

class EmissionTableComponent extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (<div>

            <div className="col-lg-12">
                <div className="row card-group pt-3 pb-5">
                    <div className="text-center col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="card-block">
                            <h4 id="em-tablecell-title1" className="kpi-title">
                                Title 1
                    </h4>
                            <div id="em-tablecell-value1" className="kpi-content">
                                2748kgs
                    </div>
                        </div>
                    </div>
                    <div className="text-center col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="card-block">
                            <h4 id="em-tablecell-title2" className="kpi-title">
                                Title 2
                    </h4>
                            <div id="em-tablecell-value2" className="kpi-content">
                                221kgs
                    </div>
                        </div>
                    </div>
                    <div className="text-center col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="card-block">
                            <h4 id="em-tablecell-title3" className="kpi-title">
                                Title 3
                    </h4>
                            <div id="em-tablecell-value3" className="kpi-content">
                                2359kgs
                    </div>
                        </div>
                    </div>
                    <div className="text-center col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="card-block">
                            <h4 id="em-tablecell-title4" className="kpi-title">
                                Title 4
                    </h4>
                            <div id="em-tablecell-value4" className="kpi-content">
                                7%
                    </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>);
    }
}

export default EmissionTableComponent;