import "./mainPage.css"

export default function mainPage() {
  return (
    <div>
        {/* <BgChanger/> */}
        {/* <Counter/> */}
        {/* <br /> */}
        {/* <Card username='Snehal' btnValue="Click Me"/> */}
        <div className="main_page_wrapper">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12">
                    <h3 className="main-page-title">All Projects</h3>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-12">
                    <div className="main_page_card_wrapper">
                        <div className="card">
                            <div className="card-body">
                             <p>Color App</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-12">
                    <div className="main_page_card_wrapper">
                        <div className="card">
                            <div className="card-body">
                             <p>Counter Task</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-12">
                    <div className="main_page_card_wrapper">
                        <div className="card">
                            <div className="card-body">
                             <p>Card Task - (Use of props)</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}



