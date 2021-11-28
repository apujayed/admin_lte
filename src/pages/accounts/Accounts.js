import React from "react";

const Accounts = () => {
  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <section className="col-lg-5 connectedSortable">
                <div className="box box-danger">
                  {/* Tabs within a box */}
                  <div className="tab-content no-padding">
                    {/* Morris chart - Sales */}
                    <div className="box-header header-custom">
                      <h3 className="box-title">Account Info</h3>
                    </div>
                    <form
                      className="form-horizontal"
                      id="fupForm"
                      name="form1"
                      method="post"
                    >
                      <div className="box-body">
                        <div className="box-body">
                          <div className="form-group">
                            <label
                              htmlFor="accntno"
                              className="col-sm-4 control-label"
                            >
                              Id
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                style={{ fontWeight: "bold", color: "red" }}
                                className="form-control"
                                defaultValue={200853}
                                readOnly
                                autoComplete="off"
                                id="cus_id"
                                placeholder="Id"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="accntno"
                              className="col-sm-4 control-label"
                            >
                              Account Name
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                id="accntno"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="proprietor"
                              className="col-sm-4 control-label"
                            >
                              Proprietor
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                id="proprietor"
                                placeholder="Proprietor"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="subaddress"
                              className="col-sm-4 control-label"
                            >
                              Address
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                id="subaddress"
                                placeholder="Address"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="address"
                              className="col-sm-4 control-label"
                            >
                              Route
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                id="address"
                                placeholder="Route"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="contact"
                              className="col-sm-4 control-label"
                            >
                              Contact
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                id="contact"
                                placeholder="Contact"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="type"
                              className="col-sm-4 control-label"
                            >
                              Account Type
                            </label>
                            <div className="col-sm-8">
                              <select
                                name="type"
                                id="type"
                                className="form-control"
                              >
                                <option value>Select</option>
                                <option value="CURRENT">CURRENT ACCOUNT</option>
                                <option value="CCLOAN">CC LOAN</option>
                                {/*<option value="CASH">CASH</option>*/}
                                <option value="CUSTOMER">CUSTOMER</option>
                                <option value="CLIENT">CLIENT</option>
                                <option value="EXPENSE">EXPENSE</option>
                                <option value="EXPORTER">EXPORTER</option>
                                <option value="FIXED">FIXED ASSET</option>
                                <option value="IMPORTER">IMPORTER</option>
                                <option value="INCOME">INCOME</option>
                                <option value="EMPLOYEE">EMPLOYEE</option>
                                <option value="HEAD">HEAD OFFICE</option>
                                <option value="RETAILER">RETAILER</option>
                                <option value="SUPPLIER">SUPPLIER</option>
                                <option value="SAVINGS">SAVINGS ACCOUNT</option>
                                {/*<option value="EMPLOYEE">EMPLOYEE</option>*/}
                                <option value="TRANSPORT">TRANSPORT</option>
                                {/* <option value="Piece">PIECE</option> */}
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* /.box-body */}
                        <div className="box-footer">
                          <button type="submit" className="btn cancel">
                            Cancel
                          </button>
                          <input
                            type="button"
                            name="save"
                            className="btn success pull-right"
                            defaultValue="Save to database"
                            id="butsave"
                          />
                        </div>
                        {/* /.box-footer */}
                      </div>
                    </form>
                  </div>
                </div>
              </section>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    .header-custom{\n  background-color: #222d32;\n  color: #fcfcfc;\n}\n",
                }}
              />
              <section className="col-lg-7 connectedSortable">
                <div className="box box-primary">
                  <div className="box-header header-custom">
                    <h3 className="box-title">Detail Info</h3>
                  </div>
                  {/* /.box-header */}
                  <div className="box-body">
                    <div className="box-body table-responsive no-padding">
                      <div
                        id="manageBrandTable_wrapper"
                        className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                      >
                        <div className="row">
                          <div className="col-sm-6">
                            <div
                              className="dataTables_length"
                              id="manageBrandTable_length"
                            >
                              <label>
                                Show{" "}
                                <select
                                  name="manageBrandTable_length"
                                  aria-controls="manageBrandTable"
                                  className="form-control input-sm"
                                >
                                  <option value={10}>10</option>
                                  <option value={25}>25</option>
                                  <option value={50}>50</option>
                                  <option value={100}>100</option>
                                </select>{" "}
                                entries
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div
                              id="manageBrandTable_filter"
                              className="dataTables_filter"
                            >
                              <label>
                                Search:
                                <input
                                  type="search"
                                  className="form-control input-sm"
                                  placeholder
                                  aria-controls="manageBrandTable"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <table
                              width="100%"
                              className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer"
                              id="manageBrandTable"
                              role="grid"
                              aria-describedby="manageBrandTable_info"
                              style={{ width: "100%" }}
                            >
                              <thead>
                                <tr
                                  style={{
                                    backgroundColor: "#006666",
                                    color: "#fcfcfc",
                                  }}
                                  role="row"
                                >
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="manageBrandTable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="ID: activate to sort column ascending"
                                    style={{ width: 27 }}
                                  >
                                    ID
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="manageBrandTable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Name: activate to sort column ascending"
                                    style={{ width: 257 }}
                                  >
                                    Name
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="manageBrandTable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Address: activate to sort column ascending"
                                    style={{ width: 240 }}
                                  >
                                    Address
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="manageBrandTable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Contact: activate to sort column ascending"
                                    style={{ width: 68 }}
                                  >
                                    Contact
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="manageBrandTable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Due: activate to sort column ascending"
                                    style={{ width: 63 }}
                                  >
                                    Due
                                  </th>
                                  <th
                                    style={{ width: 52 }}
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="manageBrandTable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Options: activate to sort column ascending"
                                  >
                                    Options
                                  </th>
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-5">
                            <div
                              className="dataTables_info"
                              id="manageBrandTable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 10 of 820 entries
                            </div>
                          </div>
                          <div className="col-sm-7">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="manageBrandTable_paginate"
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button previous disabled"
                                  id="manageBrandTable_previous"
                                >
                                  <a
                                    href="#"
                                    aria-controls="manageBrandTable"
                                    data-dt-idx={0}
                                    tabIndex={0}
                                  >
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button active">
                                  <a
                                    href="#"
                                    aria-controls="manageBrandTable"
                                    data-dt-idx={1}
                                    tabIndex={0}
                                  >
                                    1
                                  </a>
                                </li>
                                <li className="paginate_button ">
                                  <a
                                    href="#"
                                    aria-controls="manageBrandTable"
                                    data-dt-idx={2}
                                    tabIndex={0}
                                  >
                                    2
                                  </a>
                                </li>
                                <li className="paginate_button ">
                                  <a
                                    href="#"
                                    aria-controls="manageBrandTable"
                                    data-dt-idx={3}
                                    tabIndex={0}
                                  >
                                    3
                                  </a>
                                </li>
                                <li className="paginate_button ">
                                  <a
                                    href="#"
                                    aria-controls="manageBrandTable"
                                    data-dt-idx={4}
                                    tabIndex={0}
                                  >
                                    4
                                  </a>
                                </li>
                                <li className="paginate_button ">
                                  <a
                                    href="#"
                                    aria-controls="manageBrandTable"
                                    data-dt-idx={5}
                                    tabIndex={0}
                                  >
                                    5
                                  </a>
                                </li>
                                <li
                                  className="paginate_button disabled"
                                  id="manageBrandTable_ellipsis"
                                >
                                  <a
                                    href="#"
                                    aria-controls="manageBrandTable"
                                    data-dt-idx={6}
                                    tabIndex={0}
                                  >
                                    …
                                  </a>
                                </li>
                                <li className="paginate_button ">
                                  <a
                                    href="#"
                                    aria-controls="manageBrandTable"
                                    data-dt-idx={7}
                                    tabIndex={0}
                                  >
                                    82
                                  </a>
                                </li>
                                <li
                                  className="paginate_button next"
                                  id="manageBrandTable_next"
                                >
                                  <a
                                    href="#"
                                    aria-controls="manageBrandTable"
                                    data-dt-idx={8}
                                    tabIndex={0}
                                  >
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.box-body */}
                </div>
                {/* /.box */}
              </section>
              {/* edit brand */}
              <div
                className="modal fade"
                id="editBrandModel"
                tabIndex={-1}
                role="dialog"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form
                      className="form-horizontal"
                      id="editBrandForm"
                      action="php_action/editClient1.php"
                      method="POST"
                    >
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title">
                          <i className="fa fa-edit" /> Edit Account
                        </h4>
                      </div>
                      <div className="modal-body">
                        <div id="edit-brand-messages" />
                        <div
                          className="modal-loading div-hide"
                          style={{
                            width: 50,
                            margin: "auto",
                            paddingTop: 50,
                            paddingBottom: 50,
                          }}
                        >
                          <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
                          <span className="sr-only">Loading...</span>
                        </div>
                        <div className="edit-brand-result">
                          <div className="form-group">
                            <label
                              htmlFor="editBrandName"
                              className="col-sm-3 control-label"
                            >
                              Name:{" "}
                            </label>
                            <label className="col-sm-1 control-label">: </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                className="form-control"
                                id="editBrandName"
                                placeholder="Name"
                                name="editBrandName"
                                autoComplete="off"
                              />
                            </div>
                          </div>{" "}
                          {/* /form-group*/}
                          <div className="form-group">
                            <label
                              htmlFor="editAddress"
                              className="col-sm-3 control-label"
                            >
                              Address:{" "}
                            </label>
                            <label className="col-sm-1 control-label">: </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                className="form-control"
                                id="editAddress"
                                placeholder="Address"
                                name="editAddress"
                                autoComplete="off"
                              />
                            </div>
                          </div>{" "}
                          {/* /form-group*/}
                          <div className="form-group">
                            <label
                              htmlFor="editRoute"
                              className="col-sm-3 control-label"
                            >
                              Routes:{" "}
                            </label>
                            <label className="col-sm-1 control-label">: </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                className="form-control"
                                id="editRoute"
                                placeholder="Routes"
                                name="editRoute"
                                autoComplete="off"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="editContact"
                              className="col-sm-3 control-label"
                            >
                              Contact:{" "}
                            </label>
                            <label className="col-sm-1 control-label">: </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                className="form-control"
                                id="editContact"
                                placeholder="Contact"
                                name="editContact"
                                autoComplete="off"
                              />
                            </div>
                          </div>{" "}
                          {/* /form-group*/}
                          <div className="form-group">
                            <label
                              htmlFor="editType"
                              className="col-sm-3 control-label"
                            >
                              Type:{" "}
                            </label>
                            <label className="col-sm-1 control-label">: </label>
                            <div className="col-sm-8">
                              <select
                                className="form-control"
                                id="editType"
                                name="editType"
                              >
                                <option value>Select</option>
                                <option value>Select</option>
                                <option value="CURRENT">CURRENT ACCOUNT</option>
                                <option value="CCLOAN">CC LOAN</option>
                                {/*<option value="CASH">CASH</option>*/}
                                <option value="CUSTOMER">CUSTOMER</option>
                                <option value="CLIENT">CLIENT</option>
                                <option value="EXPENSE">EXPENSE</option>
                                <option value="EXPORTER">EXPORTER</option>
                                <option value="FIXED">FIXED ASSET</option>
                                <option value="IMPORTER">IMPORTER</option>
                                <option value="INCOME">INCOME</option>
                                <option value="EMPLOYEE">EMPLOYEE</option>
                                <option value="HEAD">HEAD OFFICE</option>
                                <option value="RETAILER">RETAILER</option>
                                <option value="SUPPLIER">SUPPLIER</option>
                                <option value="SAVINGS">SAVINGS ACCOUNT</option>
                                {/*<option value="EMPLOYEE">EMPLOYEE</option>*/}
                                <option value="TRANSPORT">TRANSPORT</option>
                              </select>
                              <input
                                type="text"
                                className="form-control"
                                id="userId"
                                style={{ display: "none" }}
                                placeholder="Type"
                                name="userId"
                                autoComplete="off"
                              />
                            </div>
                          </div>{" "}
                          {/* /form-group*/}
                          {/*<div class="form-group">*/}
                          {/*  <label for="editBrandStatus" class="col-sm-3 control-label">Status: </label>*/}
                          {/*  <label class="col-sm-1 control-label">: </label>*/}
                          {/*  <div class="col-sm-8">*/}
                          {/*    <select class="form-control" id="editBrandStatus" name="editBrandStatus">*/}
                          {/*      <option value="">~~SELECT~~</option>*/}
                          {/*      <option value="1">Available</option>*/}
                          {/*      <option value="2">Not Available</option>*/}
                          {/*    </select>*/}
                          {/*  </div>*/}
                        </div>
                        {/* /edit brand result */}
                      </div>{" "}
                      {/* /modal-body */}
                      <div className="modal-footer editBrandFooter">
                        <button
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                        >
                          {" "}
                          <i className="glyphicon glyphicon-remove-sign" />{" "}
                          Close
                        </button>
                        <button
                          type="submit"
                          className="btn btn-success"
                          id="editBrandBtn"
                          data-loading-text="Loading..."
                          autoComplete="off"
                        >
                          {" "}
                          <i className="glyphicon glyphicon-ok-sign" /> Save
                          Changes
                        </button>
                      </div>
                      {/* /modal-footer */}
                    </form>
                    {/* /.form */}
                  </div>
                  {/* /modal-content */}
                </div>
                {/* /modal-dailog */}
              </div>
              <div
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                id="removeMemberModal"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                      <h4 className="modal-title">
                        <i className="glyphicon glyphicon-trash" /> Remove
                        Account
                      </h4>
                    </div>
                    <div className="modal-body">
                      <p>Do you really want to remove ?</p>
                    </div>
                    <div className="modal-footer removeBrandFooter">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                      >
                        {" "}
                        <i className="glyphicon glyphicon-remove-sign" /> Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-success"
                        id="removeBrandBtn"
                        data-loading-text="Loading..."
                      >
                        {" "}
                        <i className="glyphicon glyphicon-ok-sign" /> Save
                        changes
                      </button>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
              {/* /remove brand */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
      </div>
    </>
  );
};

export default Accounts;
