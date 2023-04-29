import React from "react";

import "./view-department.css";
function handleEdit() {
  // Code to handle edit operation...
}

function handleDelete() {
  if(window.confirm("Are you sure you want to delete?")) {
    // Code to handle delete operation...
  }
}

const ViewDepartment = () => {
  return (
    <div class="main-wrapper">
      <div class="page-wrapper">
        <div class="content">
          <div class="box">
            <h1>Departments</h1>
          </div>

          <div className="btn">
            <button>+ Add New Department</button>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table
                  class="table table-striped custom-table mb-0 datatable"
                  id="row"
                >
                  <thead>
                    <tr>
                      <th>#</th>

                      <th>Department Name</th>

                      <th>Status</th>

                      <th class="text-right">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>

                      <td>Cardiology</td>

                      <td>
                        <span
                          class="custom-badge status-green"
                          className="class"
                        >
                          Active
                        </span>
                      </td>

                    <td class="text-right">
                      <div class="dropdown">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg"
                          width="16" 
                          height="16" 
                          fill="currentColor" 
                          class="bi bi-three-dots-vertical" 
                          viewBox="0 0 16 16" 
                          id="dropdownMenuButton" 
                          data-bs-toggle="dropdown" 
                          aria-expanded="false"
                        >
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                         <li><button class="dropdown-item" onClick={handleEdit}>Edit</button></li>
                          <li><button class="dropdown-item" onClick={handleDelete}>Delete</button></li>
                        </ul>
                      </div>
                    </td>
                    </tr>

                    <tr>
                      <td>2</td>

                      <td>Dentists</td>

                      <td>
                        <span class="custom-badge status-red" className="class">
                          Active
                        </span>
                      </td>

                      <td class="text-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-three-dots-vertical"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>

                      <td>Neurology</td>

                      <td>
                        <span
                          class="custom-badge status-green"
                          className="class1"
                        >
                          {" "}
                          IN Active
                        </span>
                      </td>

                      <td class="text-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-three-dots-vertical"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                      </td>
                    </tr>

                    <tr>
                      <td>4</td>

                      <td>Opthalmology</td>

                      <td>
                        <span class="custom-badge status-red" className="class">
                          Active
                        </span>
                      </td>

                      <td class="text-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-three-dots-vertical"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                      </td>
                    </tr>

                    <tr>
                      <td>5</td>

                      <td>ENT Department</td>

                      <td>
                        <span
                          class="custom-badge status-green"
                          className="class1"
                        >
                          IN Active
                        </span>
                      </td>

                      <td class="text-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-three-dots-vertical"
                          viewBox="0 0 16 16"
                        >
                          
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />

                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>

                      <td>cancer Department</td>

                      <td>
                        <span
                          class="custom-badge status-green"
                          className="class"
                        >
                          Active
                        </span>
                      </td>

                      <td class="text-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-three-dots-vertical"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="space1">
          <div className="previous">
            <h5>Previous</h5>
          </div>

          <div className="arrowno1">
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />

            <i class="fa fa-arrow-left"></i>
          </div>

          <div className="pagesno1">
            <h4>1</h4>
          </div>

          <div className="pagesno2">
            <h4> 2 </h4>
          </div>

          <div className="pagesno3">
            <h4> 3 </h4>
          </div>

          <div className="pagesno4">
            <h4> 4 </h4>
          </div>

          <div className="pagesno5">
            <h4> 5 </h4>
          </div>

          <div className="pagesno6">
            <h4> 6 </h4>
          </div>

          <div className="next">
            <h4>Next</h4>
          </div>

          <div className="arrowno2">
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />

            <i class="fa fa-arrow-right"></i>
          </div>
        </div>
      </div>

      <div id="delete_department" class="modal fade delete-modal" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body text-center">
              <img
                src="assets/img/sent.png"
                alt=""
                width="50"
                height="46"
              ></img>

              <h3>Are you sure want to delete this Department?</h3>

              <div class="m-t-20">
                <a href="#" class="btn btn-white" data-dismiss="modal">
                  Close
                </a>

                <button type="submit" class="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default ViewDepartment;
