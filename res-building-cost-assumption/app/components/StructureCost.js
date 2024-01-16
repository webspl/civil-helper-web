import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function StructureCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Structure Work Cost (BDT):</div>
            <ul className="list-group mt-1">
                {/*----- list row -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Total Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 20% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Footing and Short Column:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.20) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 5% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            GB and UGWR top Slab:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.05) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 4% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            GF Column and Stair:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.04) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 9% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            First Floor Slab:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.09) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row (floor * 3%) -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Typical Floor Column:
                        </div>
                        <div className="col-md-4">
                            Need to dev
                            <span className="text-primary d-none">
                                {numberFormat(cost * 0.09) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row (floor * 8%) -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Typical Floor Slab Before Top:
                        </div>
                        <div className="col-md-4">
                            Need to dev
                            <span className="text-primary d-none">
                                {numberFormat(cost * 0.09) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 7% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Top Roof Slab:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.07) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}
