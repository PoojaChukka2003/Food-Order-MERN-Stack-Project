import React from 'react';
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <form>
        <div className="input-group">
            <input type="text" placeholder="Search for your favourite restaurant..." id="search_field" className="form-control" />
            <div className="input-group-append">
                <button id="search-btn" className="btn">
                    <FaSearch className="fa fa-search"/>
                </button>
            </div>
        </div>
    </form>
  )
}
