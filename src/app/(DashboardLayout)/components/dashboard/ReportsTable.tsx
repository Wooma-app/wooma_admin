
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Link,
    Chip
} from '@mui/material';
import React from 'react';
import { format } from 'date-fns';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
import { Report } from '@/lib/interface';

interface ReportsTableProps {
    reports: Report[] | null;
}

const ReportsTable: React.FC<ReportsTableProps> = ({reports}) => {

    return (

        <DashboardCard title="Reports">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Report ID
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Created at
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    User ID
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    User phone number
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Status
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Payment
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    PDF Link
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reports?.map((report: Report) => (
                            <TableRow key={report.reportId}>
                                <TableCell
                                    sx={{
                                        maxWidth: 130,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    <Tooltip title={report.reportId}>
                                        <Typography
                                            sx={{
                                                fontSize: "15px",
                                                fontWeight: "500",
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {report.reportId}
                                        </Typography>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        { format(report.createdAt, 'MM/dd/yyyy hh:mm') }
                                    </Typography>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        maxWidth: 130,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    <Tooltip title={report.userId}>
                                        <Typography
                                            color="textSecondary"
                                            variant="subtitle2"
                                            fontWeight={400}
                                            sx={{
                                                fontSize: "15px",
                                                fontWeight: "500",
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {report.userId}
                                        </Typography>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {report.phoneNumber}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: 'primary.main',
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={report.status}
                                    ></Chip>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: report.paymentStatus === 'paid' ? 'primary.main':'secondary.main',
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={report.paymentStatus}
                                    ></Chip>
                                </TableCell>
                                <TableCell
                                  sx={{
                                    maxWidth: 200,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                  }}
                                >
                                    <Tooltip title={report.pdfUrl}>
                                        <Box
                                            sx={{
                                                display: "inline-block",
                                                maxWidth: "200px",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }}
                                        >
                                        <Link
                                            href={report.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            underline="none"
                                            sx={{
                                                display: "inline-block",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                color: "primary.main",
                                                cursor: "pointer",
                                              }}
                                        >
                                            {report.pdfUrl}
                                        </Link>
                                        </Box>
                                     </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default ReportsTable;
