import React from "react";
import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flexDirection: "flex",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    header: {
        fontSize: 20,
        textAlign: "center",
        marginTop: "40px",
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: "Oswald",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "center",
        fontFamily: "Times-Roman",
    },

    table: {
        marginTop: "30px",
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row",
    },
    tableCol1: {
        width: "20%",
        height: "60px",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
    },
    tableCol2: {
        width: "65%",
        height: "60px",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
    },
    tableCell: {
        margin: "auto",
        fontSize: 10,
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
    tableTopic: {
        margin: "auto",
        fontSize: 12,
        fontStyle: "bold",
    },
});

export default function Pdf(props) {
    const { selectedOptionAmountOfInformation } = props;
    const { selectedOption } = props;
    const { selectedOptionTypeOfInformation } = props;
    const { selectedOptionDecision } = props;
    const { selectedOptionCapacity } = props;
    const { defineGoalText } = props;
    const { users } = props;
    const { textAdvice } = props;
    const { advice } = props;
    const { explicitVotingMethod } = props;
    const { relativeVotingMethod1 } = props;
    const { relativeVotingMethod2 } = props;
    return (
        <div>
            <Page style={styles.page}>
                <Text style={styles.header} fixed>
                    Your responses are below.
                </Text>
                <div style={styles.body}>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableTopic}>Voting Method</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                {selectedOptionTypeOfInformation === "explicit" ? (
                                    <Text style={styles.tableTopic}>{explicitVotingMethod}</Text>
                                    ) : (
                                        <Text style={styles.tableTopic}>{relativeVotingMethod1 + " | " + relativeVotingMethod2}</Text>)
                                }
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>

                                <Text style={styles.tableCell}>What</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>{defineGoalText}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Who</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                {users.map((user, index) => (
                                    <Text key={index} style={styles.tableCell}> {user.name} </Text>))}
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Importance</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>{selectedOption}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Capacity</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>{selectedOptionCapacity}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Time and Resource</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}> {textAdvice}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Type of Decision</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>{selectedOptionDecision
                                    + " decision: " + advice}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Type of Information</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>{selectedOptionTypeOfInformation} </Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Amount of Information</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>{selectedOptionAmountOfInformation}</Text>
                            </View>
                        </View>
                    </View>
                </div>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </div>
    );
}