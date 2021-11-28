import React from 'react'

const Head = () => {
    return (
        <>
            <div className="content-wrapper">
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <section className="col-lg-12 connectedSortable">
                                <div className="box box-primary">
                                    <div className="box-header header-custom">
                                        <h3 className="box-title">Head</h3>
                                        <button data-toggle="modal" id="addCategoriesModalBtn" data-target="#addCategoriesModal"> <i classname="glyphicon glyphicon-plus-sign"> Add Categories
                                        </i></button>

                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <div className="box-body table-responsive no-padding">
                                            <div className="remove-messages" />
                                            {/* /div-action */}
                                            <div id="manageCategoriesTable_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer"><div className="row"><div className="col-sm-6"><div className="dataTables_length" id="manageCategoriesTable_length"><label>Show <select name="manageCategoriesTable_length" aria-controls="manageCategoriesTable" className="form-control input-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-6"><div id="manageCategoriesTable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control input-sm" placeholder aria-controls="manageCategoriesTable" /></label></div></div></div><div className="row"><div className="col-sm-12"><table width="100%" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer" id="manageCategoriesTable" role="grid" aria-describedby="manageCategoriesTable_info" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr style={{ backgroundColor: '#006666', color: '#fcfcfc' }} role="row"><th className="sorting" tabIndex={0} aria-controls="manageCategoriesTable" rowSpan={1} colSpan={1} aria-label="Categories Name: activate to sort column ascending" style={{ width: 289 }}>Categories Name</th><th className="sorting" tabIndex={0} aria-controls="manageCategoriesTable" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: 136 }}>Status</th><th style={{ width: 53 }} className="sorting" tabIndex={0} aria-controls="manageCategoriesTable" rowSpan={1} colSpan={1} aria-label="Options: activate to sort column ascending">Options</th></tr>
                                                </thead>
                                                <tbody>
                                                    </tbody></table></div></div><div className="row"><div className="col-sm-5"><div className="dataTables_info" id="manageCategoriesTable_info" role="status" aria-live="polite">Showing 1 to 8 of 8 entries</div></div><div className="col-sm-7"><div className="dataTables_paginate paging_simple_numbers" id="manageCategoriesTable_paginate"><ul className="pagination"><li className="paginate_button previous disabled" id="manageCategoriesTable_previous"><a href="#" aria-controls="manageCategoriesTable" data-dt-idx={0} tabIndex={0}>Previous</a></li><li className="paginate_button active"><a href="#" aria-controls="manageCategoriesTable" data-dt-idx={1} tabIndex={0}>1</a></li><li className="paginate_button next disabled" id="manageCategoriesTable_next"><a href="#" aria-controls="manageCategoriesTable" data-dt-idx={2} tabIndex={0}>Next</a></li></ul></div></div></div></div>
                                            {/* /table */}
                                        </div> {/* /panel-body */}
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                            </section>
                            {/* add categories */}
                            <div className="modal fade" id="addCategoriesModal" tabIndex={-1} role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <form className="form-horizontal" id="submitCategoriesForm" action="php_action/createCategories.php" method="POST">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                                <h4 className="modal-title"><i className="fa fa-plus" /> Add Head</h4>
                                            </div>
                                            <div className="modal-body">
                                                <div id="add-categories-messages" />
                                                <div className="form-group">
                                                    <label htmlFor="headname" className="col-sm-4 control-label">Head Name: </label>
                                                    <label className="col-sm-1 control-label">: </label>
                                                    <div className="col-sm-7">
                                                        <input type="text" className="form-control" id="headname" placeholder="Head Name" name="headname" autoComplete="off" />
                                                    </div>
                                                </div> {/* /form-group*/}
                                                <div className="form-group">
                                                    <label htmlFor="headstatus" className="col-sm-4 control-label">Status: </label>
                                                    <label className="col-sm-1 control-label">: </label>
                                                    <div className="col-sm-7">
                                                        <select className="form-control" id="categoriesStatus" name="categoriesStatus">
                                                            <option value>~~SELECT~~</option>
                                                            <option value={1}>Available</option>
                                                            <option value={2}>Not Available</option>
                                                        </select>
                                                    </div>
                                                </div> {/* /form-group*/}
                                            </div> {/* /modal-body */}
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-danger" data-dismiss="modal"> <i className="glyphicon glyphicon-remove-sign" /> Close</button>
                                                <button type="submit" className="btn btn-success" id="createCategoriesBtn" data-loading-text="Loading..." autoComplete="off"> <i className="glyphicon glyphicon-ok-sign" /> Save Changes</button>
                                            </div> {/* /modal-footer */}
                                        </form> {/* /.form */}
                                    </div> {/* /modal-content */}
                                </div> {/* /modal-dailog */}
                            </div>
                            {/* /add categories */}
                            {/* edit categories brand */}
                            <div className="modal fade" id="editCategoriesModal" tabIndex={-1} role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <form className="form-horizontal" id="editCategoriesForm" action="php_action/editCategories.php" method="POST">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                                <h4 className="modal-title"><i className="fa fa-edit" /> Edit Brand</h4>
                                            </div>
                                            <div className="modal-body">
                                                <div id="edit-categories-messages" />
                                                <div className="modal-loading div-hide" style={{ width: 50, margin: 'auto', paddingTop: 50, paddingBottom: 50 }}>
                                                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                <div className="edit-categories-result">
                                                    <div className="form-group">
                                                        <label htmlFor="editCategoriesName" className="col-sm-4 control-label">Categories Name: </label>
                                                        <label className="col-sm-1 control-label">: </label>
                                                        <div className="col-sm-7">
                                                            <input type="text" className="form-control" id="editCategoriesName" placeholder="Categories Name" name="editCategoriesName" autoComplete="off" />
                                                        </div>
                                                    </div> {/* /form-group*/}
                                                    <div className="form-group">
                                                        <label htmlFor="editCategoriesStatus" className="col-sm-4 control-label">Status: </label>
                                                        <label className="col-sm-1 control-label">: </label>
                                                        <div className="col-sm-7">
                                                            <select className="form-control" id="editCategoriesStatus" name="editCategoriesStatus">
                                                                <option value>~~SELECT~~</option>
                                                                <option value={1}>Available</option>
                                                                <option value={2}>Not Available</option>
                                                            </select>
                                                        </div>
                                                    </div> {/* /form-group*/}
                                                </div>
                                                {/* /edit brand result */}
                                            </div> {/* /modal-body */}
                                            <div className="modal-footer editCategoriesFooter">
                                                <button type="button" className="btn btn-danger" data-dismiss="modal"> <i className="glyphicon glyphicon-remove-sign" /> Close</button>
                                                <button type="submit" className="btn btn-success" id="editCategoriesBtn" data-loading-text="Loading..." autoComplete="off"> <i className="glyphicon glyphicon-ok-sign" /> Save Changes</button>
                                            </div>
                                            {/* /modal-footer */}
                                        </form>
                                        {/* /.form */}
                                    </div>
                                    {/* /modal-content */}
                                </div>
                                {/* /modal-dailog */}
                            </div>
                            {/* /categories brand */}
                            {/* categories brand */}
                            <div className="modal fade" tabIndex={-1} role="dialog" id="removeCategoriesModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <h4 className="modal-title"><i className="glyphicon glyphicon-trash" /> Remove Categories</h4>
                                        </div>
                                        <div className="modal-body">
                                            <p>Do you really want to remove ?</p>
                                        </div>
                                        <div className="modal-footer removeCategoriesFooter">
                                            <button type="button" className="btn btn-danger" data-dismiss="modal"> <i className="glyphicon glyphicon-remove-sign" /> Close</button>
                                            <button type="button" className="btn btn-success" id="removeCategoriesBtn" data-loading-text="Loading..."> <i className="glyphicon glyphicon-ok-sign" /> Save changes</button>
                                        </div>
                                    </div>{/* /.modal-content */}
                                </div>{/* /.modal-dialog */}
                            </div>{/* /.modal */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </section>


            </div>
        </>
    )
}

export default Head
