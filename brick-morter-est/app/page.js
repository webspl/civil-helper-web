'use client';
import Image from 'next/image';
import Swal from 'sweetalert2';
import React, { useState, useEffect, Fragment } from 'react';

export default function Home() {
	const [loading, setLoading] = useState(100);
	const [resultGenerated, setResultGenerated] = useState(false);

	const [work_length, setWorkLength] = useState(100);
	const [work_breadth, setWorkBreadth] = useState(10);
	const [work_thick, setWorkThick] = useState(0.42);

	const [ratioCement, setRatioCement] = useState(1);
	const [ratioSand, setRatioSand] = useState(5);

	const [rateCement, setRateCement] = useState(540);
	const [rateSand, setRateSand] = useState(60);
	const [rateBrick, setRateBrick] = useState(12);

	const [resultCement, setResultCement] = useState('-');
	const [resultSand, setResultSand] = useState('-');
	const [resultBrick, setResultBrick] = useState('-');

	const [resultCementAmount, setResultCementAmount] = useState('-');
	const [resultSandAmount, setResultSandAmount] = useState('-');
	const [resultBrickAmount, setResultBrickAmount] = useState('-');
	const [resultTotalAmount, setResultTotalAmount] = useState('-');
	const [resultUnitAmount, setResultUnitAmount] = useState('-');
	const [resultUnitAmountSFT, setResultUnitAmountSFT] = useState('-');

	// set resultGenerated
	useEffect(() => {
		setResultGenerated(false);
		setLoading(100);
	}, [work_length, work_breadth, work_thick]);

	const calculateConcrete = () => {
		const work_volume = work_length * work_breadth * work_thick;
		const per_brick_volume = (10 / 12) * (5 / 12) * (3 / 12);
		const total_brick = work_volume / per_brick_volume;
		const total_brick_amount = total_brick * rateBrick;
		setResultBrick(total_brick.toFixed(2));
		setResultBrickAmount(total_brick_amount.toFixed(2).toLocaleString());

		const ratio_sum = ratioCement + ratioSand;
		const ratio_x = ratioCement / ratio_sum;
		const ratio_y = ratioSand / ratio_sum;

		const morter_volume = work_volume * 0.35;
		const total_cement = morter_volume * ratio_x * 0.8;
		const total_cement_amount = total_cement * rateCement;
		setResultCement(total_cement.toFixed(2));
		setResultCementAmount(total_cement_amount.toFixed(2).toLocaleString());
		const total_sand = morter_volume * ratio_y;
		const total_sand_amount = total_sand * rateSand;
		setResultSand(total_sand.toFixed(2));
		setResultSandAmount(total_sand_amount.toFixed(2).toLocaleString());

		const total_cost = total_cement_amount + total_sand_amount + total_brick_amount;
		const unit_cost = total_cost / work_volume;
		const unit_cost_sft = total_cost / (work_length * work_breadth);
		setResultTotalAmount(total_cost.toFixed(2).toLocaleString());
		setResultUnitAmount(unit_cost.toFixed(2).toLocaleString());
		setResultUnitAmountSFT(unit_cost_sft.toFixed(2).toLocaleString());

		// set result generated true
		setLoading(() => 70);
		setTimeout(() => {
			setLoading(() => 100);
			setResultGenerated(true);
		}, 500);
	};

	return (
		<Fragment>
			<nav className="navbar bg-dark-subtle border-bottom border-secondary">
				<div className="container">
					<div className="navbar-brand">Brick Morter Estimator</div>
					<a className="btn btn-light" href="http://civil.webspl.com">
						HOME
					</a>
				</div>
			</nav>
			<div className="container">
				<div className="row border bg-light my-lg-3 py-3">
					{/*----- data form start -----*/}
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12 pb-3">
								<label htmlFor="work_length" className="form-label">
									Work Length (FT)
								</label>
								<input
									type="number"
									className="form-control"
									id="work_length"
									value={work_length}
									onChange={(e) => setWorkLength(parseFloat(e.target.value))}
									required
								/>
							</div>
							<div className="col-md-12 pb-3">
								<label htmlFor="work_breadth" className="form-label">
									Work Breadth/Height (FT)
								</label>
								<input
									type="number"
									className="form-control"
									id="work_breadth"
									value={work_breadth}
									onChange={(e) => setWorkBreadth(parseFloat(e.target.value))}
									required
								/>
							</div>
							<div className="col-md-12 pb-3">
								<label htmlFor="work_thick" className="form-label">
									Work Thick (FT)
								</label>
								<input
									type="number"
									className="form-control"
									id="work_thick"
									value={work_thick}
									onChange={(e) => setWorkThick(parseFloat(e.target.value))}
									required
								/>
							</div>
							<div className="col-md-6 pb-3">
								<label htmlFor="ratio_cement" className="form-label">
									Cement Ratio
								</label>
								<input
									type="number"
									className="form-control"
									id="ratio_cement"
									value={ratioCement}
									onChange={(e) => setRatioCement(parseFloat(e.target.value))}
									required
								/>
							</div>
							<div className="col-md-6 pb-3">
								<label htmlFor="ratio_sand" className="form-label">
									Sand Ratio
								</label>
								<input
									type="number"
									className="form-control"
									id="ratio_sand"
									value={ratioSand}
									onChange={(e) => setRatioSand(parseFloat(e.target.value))}
									required
								/>
							</div>
							<div className="col-md-6">
								<button type="button" className="btn btn-secondary w-100" onClick={calculateConcrete}>
									Calculate
								</button>
							</div>
							<div className={`col-md-6 mt-2 mt-lg-0 ${loading === 100 && 'd-none'}`}>
								<div className="progress" role="progressbar" style={{ height: '38px' }}>
									<div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: loading + '%' }}></div>
								</div>
							</div>
						</div>
					</div>
					{/*----- data form end -----*/}

					{/*----- rate form start -----*/}
					<div className="col-md-6 mt-5 mt-lg-0">
						<div className="row">
							<div className="col-md-12 pb-3">
								<label htmlFor="rate_cement" className="form-label">
									Rate Cement (Bag)
								</label>
								<input
									type="number"
									className="form-control"
									id="rate_cement"
									value={rateCement}
									onChange={(e) => setRateCement(parseFloat(e.target.value))}
									required
								/>
							</div>
							<div className="col-md-12 pb-3">
								<label htmlFor="rate_sand" className="form-label">
									Rate Sand (CFT)
								</label>
								<input
									type="number"
									className="form-control"
									id="rate_sand"
									value={rateSand}
									onChange={(e) => setRateSand(parseFloat(e.target.value))}
									required
								/>
							</div>
							<div className="col-md-12 pb-3">
								<label htmlFor="rate_brick" className="form-label">
									Rate Brick (PCS)
								</label>
								<input
									type="number"
									className="form-control"
									id="rate_brick"
									value={rateBrick}
									onChange={(e) => setRateBrick(parseFloat(e.target.value))}
									required
								/>
							</div>
						</div>
					</div>
					{/*----- rate form end -----*/}
				</div>
			</div>

			<div className={`container mb-5 ${!resultGenerated && 'd-none'}`}>
				<div className="row border bg-light my-3 py-3">
					{/*----- material details start -----*/}
					<div className="col-md-6">
						<div className="list-group">
							<div className="list-group-item list-group-item-action text-white bg-secondary">Material Details</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Cement (Bags)</div>
									<div className="col-9 text-center text-primary">{resultCement}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Sand (CFT)</div>
									<div className="col-9 text-center text-primary">{resultSand}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Brick (PCS)</div>
									<div className="col-9 text-center text-primary">{resultBrick}</div>
								</div>
							</div>
						</div>
					</div>
					{/*----- material details end -----*/}

					{/*----- costing details start -----*/}
					<div className="col-md-6">
						<div className="list-group">
							<div className="list-group-item list-group-item-action text-white bg-secondary">Material Details</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Cement (TK)</div>
									<div className="col-9 text-center text-primary">{resultCementAmount}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Sand (TK)</div>
									<div className="col-9 text-center text-primary">{resultSandAmount}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Brick (TK)</div>
									<div className="col-9 text-center text-primary">{resultBrickAmount}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Total Cost (TK)</div>
									<div className="col-9 text-center text-primary">{resultTotalAmount}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Per Unit Cost (CFT-TK)</div>
									<div className="col-9 text-center text-primary">{resultUnitAmount}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Per Unit Cost (SFT-TK)</div>
									<div className="col-9 text-center text-primary">{resultUnitAmountSFT}</div>
								</div>
							</div>
						</div>
					</div>
					{/*----- costing details end -----*/}
				</div>
			</div>
		</Fragment>
	);
}
