import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Button, Toolbar, IconButton, Typography, makeStyles, withStyles, Link, AppBar, Box, Paper } from '@material-ui/core';
import { TabPanel, TabContext } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
//import {  } from 'react-pdf';
import hotel from '../hotel.pdf'
import { Document, Page, View, StyleSheet} from 'react-pdf/dist/entry.webpack';



// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });


/* <Document file="hotel.pdf">
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                  <Text>Section #2</Text>
                </View>
              </Page>
            </Document> */



export default function Hotel() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
   
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    return (
        <div>
        <Document file={hotel} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
}