import React from "react";
import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flexDirection: "flex",
    },
    header: {
        fontSize: 20,
        textAlign: "center",
        marginTop: "40px",
    },
    subtitle: {
        fontSize: 18,
        textAlign:"left",
        margin:"12px",

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
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row",
        minHeight: "50px",
    },
    tableCol1: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: "1px",
    },
    tableCol2: {
        width: "65%",
        borderWidth: "1px",
        borderStyle: "solid",

    },
    tableCol3: {
        width: "29%",
        borderStyle: "solid",
        borderWidth: "1px",

    },
    tableCol21: {
        width: "29%",

        borderStyle: "solid",
        borderWidth: "1px",
    },
    tableCol22: {
        width: "29%",
        borderWidth: "1px",
        borderStyle: "solid",

    },
    tableCol23: {
        width: "29%",

        borderStyle: "solid",
        borderWidth: "1px",

    },
    tableCell: {
        margin: "auto",
        fontSize: 10,
    },
    tableCell2: {
        margin: "10px",
        fontSize: 10,
        textAlign:"left",
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

                <div>
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
            <Page style={styles.page}>
                <Text style={styles.header} fixed>
                    Recommended Voting Method
                </Text>
                <Text style={styles.subtitle}>
                    Explicit
                </Text>
                <div>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableTopic}>Voting Method</Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableTopic}>Amount of Information Needed</Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableTopic}>Examples</Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableCell2}>Approval voting (Voters choose "Yes" or "No" for each option, and the option with the most "Yes" votes wins.)</Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableCell2}>Enough information for voters to answer yes or no to each
                                    option.</Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableCell2}>You want to narrow down a list of 100 research topics based on if they meet a certain set of criteria.</Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableCell2}>Score voting (Voters give each option a score on some objective metric, and the option with the highest score
                                    wins.)</Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableCell2}>Enough information for voters to score each option from 1-5
                                    (less information). Enough information for voters to score
                                    each option from 1-100 (more information).</Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableCell2}>You want to select 5 research topics to pursue this year
                                    from a list of 50 options. Your metric is: "How many studies
                                    have already been published about this topic?"</Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableCell2}>Delphi method (Involves multipleanonymous surveys followed by discussions about the aggregate survey results until a
                                    decision has been reached.)</Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableCell2}>Enough information for voters to score each option
                                    individually ccording to an external, objective metric.</Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableCell2}>You are making a very important decision, you have a long
                                    time frame and high team capacity, you would like to reach a
                                    consensus, and anonymity among voters is important.</Text>
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