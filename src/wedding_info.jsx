import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Button, Toolbar, IconButton, Typography, makeStyles, withStyles, Link, AppBar, Box, Paper } from '@material-ui/core';
import { TabPanel, TabContext } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import infopdf from '../wedding-invite.pdf'
import { Document, Page, View, StyleSheet} from 'react-pdf/dist/entry.webpack';




export default function Info() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
   
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    return (
        <div>
        <Document file={infopdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
}