'use client';
import Image from 'next/image';
import Swal from 'sweetalert2';
import {numberFormat} from './utils/numberFormat';
import React, { useState, useEffect, Fragment} from 'react';
import StructureCost from './components/StructureCost';
import BrickCost from './components/BrickCost';
import WoodCost from './components/WoodCost';
import MetalCost from './components/MetalCost';
import PlumbingCost from './components/PlumbingCost';
import ElectricCost from './components/ElectricCost';
import PlasterCost from './components/PlasterCost';
import FloorTilesGeneralCost from './components/FloorTilesGeneralCost';
import ToiletAndkitchenTilesCost from './components/ToiletAndkitchenTilesCost';
import AluminiumCost from './components/AluminiumCost';
import LiftGeneratorSubstationCost from './components/LiftGeneratorSubstationCost';
import PaintCost from './components/PaintCost';
import OtherCivilCost from './components/OtherCivilCost';
import UtilityConnectionBillCost from './components/UtilityConnectionBillCost';

export default function Home() {
	const [loading, setLoading] = useState(100);
	const [activeTab, setActiveTab] = useState('structureCost');
	const [resultGenerated, setResultGenerated] = useState(false);

	const [building_area_sft, setBuilding_area_sft] = useState(1800);
	const [total_story, setTotal_story] = useState(5);
	const [per_sft_cost, setPer_sft_cost] = useState(1600);

	const [totalCost, setTotalCost] = useState();
	const [structureCost, setStructureCost] = useState();
	const [brickCost, setBrickCost] = useState();
	const [woodCost, setWoodCost] = useState();
	const [metalCost, setMetalCost] = useState();
	const [plumbingCost, setPlumbingCost] = useState();
	const [electricCost, setElectricCost] = useState();
	const [plasterCost, setPlasterCost] = useState();
	const [floorTilesGeneralCost, setFloorTilesGeneralCost] = useState();
	const [toiletAndkitchenTilesCost, setToiletAndKitchenTilesCost] = useState();
	const [aluminiumCost, setAluminiumCost] = useState();
	const [liftGeneratorSubstationCost, setLiftGeneratorSubstationCost] = useState();
	const [paintCost, setPaintCost] = useState();
	const [otherCivilCost, setOtherCivilCost] = useState();
	const [utilityConnectionBillCost, setUtilityConnectionBillCost] = useState();


	// set resultGenerated
	useEffect(() => {
		setResultGenerated(false);
		setLoading(100);
	}, [building_area_sft, total_story, per_sft_cost]);

	// ---------- Calculation Start ----------
	const calculate = () => {
		// calculate total cost.
		const total_cost_bdt = building_area_sft * total_story * per_sft_cost;
		setTotalCost(() => total_cost_bdt);

		// calculate report data.
		setStructureCost(() => total_cost_bdt * 0.35);					// 35%
		setBrickCost(() => total_cost_bdt * 0.06);						// 6%
		setWoodCost(() => total_cost_bdt * 0.05);						// 5%
		setMetalCost(() => total_cost_bdt * 0.02);						// 2%
		setPlumbingCost(() => total_cost_bdt * 0.06);					// 6%
		setElectricCost(() => total_cost_bdt * 0.07);					// 7%
		setPlasterCost(() => total_cost_bdt * 0.04);					// 4%
		setFloorTilesGeneralCost(() => total_cost_bdt * 0.06);			// 6%
		setToiletAndKitchenTilesCost(() => total_cost_bdt * 0.03);		// 3%
		setAluminiumCost(() => total_cost_bdt * 0.04);					// 4%
		setLiftGeneratorSubstationCost(() => total_cost_bdt * 0.10);	// 10%
		setPaintCost(() => total_cost_bdt * 0.03);						// 3%
		setOtherCivilCost(() => total_cost_bdt * 0.06);					// 6%
		setUtilityConnectionBillCost(() => total_cost_bdt * 0.03);		// 3%
		
		// set result generated true
		setLoading(() => 70);
		setTimeout(() => {
			setLoading(() => 100);
			setResultGenerated(true);
		}, 500);
	}
	// ---------- Calculation End ----------


	return (
		<Fragment>
			<nav className="navbar bg-dark-subtle border-bottom border-secondary">
				<div className="container">
					<div className="navbar-brand">Building Cost Assumption</div>
					<a className="btn btn-light" href="http://civil.webspl.com">
						HOME
					</a>
				</div>
			</nav>
			<div className="container">
				<div className="row border bg-light my-lg-3 py-3">
					<div className="col-md-3">
						{/*----- mandatory form start -----*/}
						<div className="row">

							{/*--- building_area ---*/}
							<div className="col-md-12 pb-3">
								<label htmlFor="building_area" className="form-label">
									Building Area SFT
								</label>
								<input type="number" className="form-control" id="building_area"
									value={building_area_sft}
									onChange={e => setBuilding_area_sft(parseFloat(e.target.value))}
									required />
							</div>

							{/*--- total_story ---*/}
							<div className="col-md-12 pb-3">
								<label htmlFor="total_story" className="form-label">
									Total Story
								</label>
								<input type="number" className="form-control" id="total_story"
									value={total_story}
									onChange={e => setTotal_story(parseFloat(e.target.value))}
									required />
							</div>

							{/*--- per_sft_cost ---*/}
							<div className="col-md-12 pb-3">
								<label htmlFor="per_sft_cost" className="form-label">
									Assumed Per SFT Cost
								</label>
								<input type="number" className="form-control" id="per_sft_cost"
									value={per_sft_cost}
									onChange={e => setPer_sft_cost(parseFloat(e.target.value))}
									required />
								<div className="form-text">Assume cost as per right side items.</div>
							</div>

							<div className="col-md-12 d-none">&nbsp;</div>
							<div className="col-md-12 pb-3">
								<button type="button" className="btn btn-secondary w-100" 
									onClick={calculate}>
									Calculate
								</button>
							</div>
							<div className={`col-md-12 pb-3 mt-2 mt-lg-0 ${loading === 100 && 'd-none'}`}>
								<div className="progress" role="progressbar" style={{ height: '38px' }}>
									<div className="progress-bar progress-bar-striped progress-bar-animated" 
									style={{ width: loading + '%' }}></div>
								</div>
							</div>

						</div>
						{/*----- mandatory form end -----*/}
					</div>

					{/*----- information list start -----*/}
					<div className="col-md-5 mt-5 mt-lg-0">
						<div className="border-bottom fw-bold">Assumptions (BDT):</div>
						<ul className="list-group mt-1">
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Total Cost:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(totalCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Structure Work:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(structureCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Brick Work:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(brickCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Wood Work:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(woodCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Metal Work:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(metalCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Plumbing Sanitery Work:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(plumbingCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Electric Work:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(electricCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Plaster Work:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(plasterCost) || '***'}
										</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
					{/*----- information list end -----*/}

					{/*----- information list start -----*/}
					<div className="col-md-4">
						<div className="border-bottom fw-bold">Assumptions (BDT):</div>
						<ul className="list-group mt-1">
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Floor Tiles General:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(floorTilesGeneralCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Tiles Toilet & Kitchen:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(toiletAndkitchenTilesCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Aluminium Work:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(aluminiumCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Lift Generator Substation:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(liftGeneratorSubstationCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Paint Work:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(paintCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Other Civil Work:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(otherCivilCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Utility Connection & Bill:	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{numberFormat(utilityConnectionBillCost) || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-12">
										Click bellow tabs for item-wise details
									</div>
									<div className="col-md-4 d-none">
										<span className="text-primary"></span>
									</div>
								</div>
							</li>
						</ul>
					</div>
					{/*----- information list end -----*/}
				</div>
			</div>

			<div className={`container mb-5 ${!resultGenerated && 'd-none'}`}>
				<div className="row border my-3 py-3" style={{backgroundColor: '#ecf6ff'}}>
					{/*----- information details start -----*/}
					<div className="col-md-12">
						{/*----- tab section start -----*/}
						<ul className="nav nav-tabs" id="myTab" role="tablist">
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'structureCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('structureCost')}>
									Structure
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'brickCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('brickCost')}>
									Brick
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'woodCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('woodCost')}>
									Wood
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'metalCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('metalCost')}>
									Metal
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'plumbingCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('plumbingCost')}>
									Plumbing
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'electricCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('electricCost')}>
									Elect
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'plasterCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('plasterCost')}>
									Plaster
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'floorTilesGeneralCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('floorTilesGeneralCost')}>
									FT
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'toiletAndkitchenTilesCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('toiletAndkitchenTilesCost')}>
									TKT
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'aluminiumCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('aluminiumCost')}>
									Alum
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'liftGeneratorSubstationCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('liftGeneratorSubstationCost')}>
									LGS
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'paintCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('paintCost')}>
									Paint
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'otherCivilCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('otherCivilCost')}>
									OC
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className={`nav-link ${activeTab === 'utilityConnectionBillCost' ? 'active bg-info' : ''}`}
									onClick={() => setActiveTab('utilityConnectionBillCost')}>
									UCB
								</button>
							</li>
						</ul>
						<div className="tab-content p-2 px-md-3 py-md-3 bg-white">
							<div className={`${activeTab === 'structureCost' ? 'd-block' : 'd-none'}`}>
								<StructureCost cost={structureCost}/>
							</div>
							<div className={`${activeTab === 'brickCost' ? 'd-block' : 'd-none'}`}>
								<BrickCost cost={brickCost} />
							</div>
							<div className={`${activeTab === 'woodCost' ? 'd-block' : 'd-none'}`}>
								<WoodCost cost={woodCost} />
							</div>
							<div className={`${activeTab === 'metalCost' ? 'd-block' : 'd-none'}`}>
								<MetalCost cost={metalCost} />
							</div>
							<div className={`${activeTab === 'plumbingCost' ? 'd-block' : 'd-none'}`}>
								<PlumbingCost cost={plumbingCost} />
							</div>
							<div className={`${activeTab === 'electricCost' ? 'd-block' : 'd-none'}`}>
								<ElectricCost cost={electricCost} />
							</div>
							<div className={`${activeTab === 'plasterCost' ? 'd-block' : 'd-none'}`}>
								<PlasterCost cost={plasterCost} />
							</div>
							<div className={`${activeTab === 'floorTilesGeneralCost' ? 'd-block' : 'd-none'}`}>
								<FloorTilesGeneralCost cost={floorTilesGeneralCost} />
							</div>
							<div className={`${activeTab === 'toiletAndkitchenTilesCost' ? 'd-block' : 'd-none'}`}>
								<ToiletAndkitchenTilesCost cost={toiletAndkitchenTilesCost} />
							</div>
							<div className={`${activeTab === 'aluminiumCost' ? 'd-block' : 'd-none'}`}>
								<AluminiumCost cost={aluminiumCost} />
							</div>
							<div className={`${activeTab === 'liftGeneratorSubstationCost' ? 'd-block' : 'd-none'}`}>
								<LiftGeneratorSubstationCost cost={liftGeneratorSubstationCost} />
							</div>
							<div className={`${activeTab === 'paintCost' ? 'd-block' : 'd-none'}`}>
								<PaintCost cost={paintCost} />
							</div>
							<div className={`${activeTab === 'otherCivilCost' ? 'd-block' : 'd-none'}`}>
								<OtherCivilCost cost={otherCivilCost} />
							</div>
							<div className={`${activeTab === 'utilityConnectionBillCost' ? 'd-block' : 'd-none'}`}>
								<UtilityConnectionBillCost cost={utilityConnectionBillCost} />
							</div>
						</div>
						{/*----- tab section end -----*/}
					</div>
					{/*----- information details end -----*/}
				</div>
			</div>
		</Fragment>
	)
}
