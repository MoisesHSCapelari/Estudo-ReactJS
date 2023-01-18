import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";

// views

import Dashboard from "views/admin/Dashboard.js";

import Peoples from 'views/admin/Peoples';
import Bank from 'views/admin/Bank';
import AccountBank from 'views/admin/AccountBank';
import BillsToPay from 'views/admin/BillsToPay';
import BillsToReceive from 'views/admin/BillsToReceive';

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/pessoas" exact component={Peoples} />
            <Route path="/admin/bancos" exact component={Bank} />
            <Route path="/admin/contas-bancarias" exact component={AccountBank} />
            <Route path="/admin/contas-a-pagar" exact component={BillsToPay} />
            <Route path="/admin/contas-a-receber" exact component={BillsToReceive} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
}
