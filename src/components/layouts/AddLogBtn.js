import React from 'react'

export default function () {
    return (
 <div className="fixed-action-btn">
    <a href="#add_log_modal" className="btn-floating btn-large blue darken-2 modal-trigger">
        <i className="large material-icons">add</i>
    </a>
    <ul>
        <li><a href="#tech-list-modal" className="btn-floating red modal-trigger"><i className="material-icons">person</i></a></li>
        <li><a href="#tech-modal" className="btn-floating blue modal-trigger"><i className="material-icons">person_add</i></a></li>
    </ul>
  </div>
      
    )
}
