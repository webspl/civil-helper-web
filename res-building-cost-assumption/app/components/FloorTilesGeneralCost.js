import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function FloorTilesGeneralCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Floor Tiles General Work Cost (BDT):</div>
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
                {/*----- list row 75% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Floor and Verandah Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.75) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 20% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Stair, Lobby and Lift Wall Cost:
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
                            Ground Floor Lift+Lobby+Receiption Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.5) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}
