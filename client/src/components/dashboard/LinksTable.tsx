import { useState } from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";
import { Link } from "@tanstack/react-router";
import { Button } from "./Button";
import { QrCodeButton } from "./QrCodeButton";

export type LinkData = {
  id: number;
  name: string;
  url: string;
  value: string;
  clicks: number;
  dateCreated: string;
  expireAfter: string;
};

const data: LinkData[] = [
  {
    id: 1,
    name: "link.ly/zuHMhnIRE",
    url: "https://link.ly/zuHMhnIRE",
    value: "Website film link",
    clicks: 1152,
    dateCreated: "23/6/2023",
    expireAfter: "29 day",
  },
  {
    id: 2,
    name: "link.ly/UsdKJVOW",
    url: "https://link.ly/UsdKJVOW",
    value: "My Dribbble shot",
    clicks: 307,
    dateCreated: "11/5/2022",
    expireAfter: "2 week",
  },
  {
    id: 3,
    name: "link.ly/ENIrzWaQI",
    url: "https://link.ly/ENIrzWaQI",
    value: "Twitter post link",
    clicks: -78,
    dateCreated: "10/9/2020",
    expireAfter: "1 year",
  },
  {
    id: 4,
    name: "link.ly/vetzABVnhu",
    url: "https://link.ly/vetzABVnhu",
    value: "Link num 1",
    clicks: -2012,
    dateCreated: "11/7/2023",
    expireAfter: "269 day",
  },
  {
    id: 5,
    name: "link.ly/BetOCznlYx",
    url: "https://link.ly/BetOCznlYx",
    value: "Portfolio page link",
    clicks: 1000,
    dateCreated: "12/2/2023",
    expireAfter: "Lifetime",
  },
  {
    id: 6,
    name: "link.ly/HTfdzLJhlEI",
    url: "https://link.ly/HTfdzLJhlEI",
    value: "Instagram reels",
    clicks: -812,
    dateCreated: "1/1/2022",
    expireAfter: "5 year",
  },
  {
    id: 7,
    name: "link.ly/DKDsdsdYT",
    url: "https://link.ly/DKDsdsdYT",
    value: "Telegram group",
    clicks: -101,
    dateCreated: "9/3/2021",
    expireAfter: "2 month",
  },
];

export function LinksTable({ searchQuery = "" }: { searchQuery?: string }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  // Define columns
  const columns: ColumnDef<LinkData>[] = [
    {
      accessorKey: "id",
      header: "#",
      size: 60,
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 hover:bg-transparent"
          >
            Name
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="ml-2 h-4 w-4" />
            ) : (
              <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
            )}
          </Button>
        );
      },
      cell: ({ row }) => (
        <Link to={row.original.url} className="text-rose-500 hover:underline">
          {row.original.name}
        </Link>
      ),
    },
    {
      accessorKey: "value",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 hover:bg-transparent"
          >
            Value
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="ml-2 h-4 w-4" />
            ) : (
              <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
            )}
          </Button>
        );
      },
    },
    {
      accessorKey: "clicks",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 hover:bg-transparent"
          >
            Clicks
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="ml-2 h-4 w-4" />
            ) : (
              <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
            )}
          </Button>
        );
      },
      cell: ({ row }) => {
        const clicks = row.original.clicks;
        const isPositive = clicks > 0;
        return (
          <span className={isPositive ? "text-emerald-500" : "text-rose-500"}>
            {isPositive ? "+" : ""}
            {clicks.toLocaleString()}
          </span>
        );
      },
    },
    {
      accessorKey: "dateCreated",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 hover:bg-transparent"
          >
            Date Created
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="ml-2 h-4 w-4" />
            ) : (
              <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
            )}
          </Button>
        );
      },
    },
    {
      accessorKey: "expireAfter",
      header: "Expire after",
      cell: ({ row }) => {
        const expireAfter = row.original.expireAfter;
        return expireAfter.includes("day") ? (
          <span className="text-rose-500">{expireAfter}</span>
        ) : (
          <span>{expireAfter}</span>
        );
      },
    },
    {
      id: "qrcode",
      cell: () => <QrCodeButton />,
      size: 50,
    },
    {
      id: "actions",
      cell: () => (
        <Button variant="ghost" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </Button>
      ),
      size: 50,
    },
  ];

  // Set up the table
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter: searchQuery,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="rounded-lg border bg-white">
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={{ width: header.getSize() }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing{" "}
          {table.getState().pagination.pageIndex *
            table.getState().pagination.pageSize +
            1}{" "}
          to{" "}
          {Math.min(
            (table.getState().pagination.pageIndex + 1) *
              table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length
          )}{" "}
          of {table.getFilteredRowModel().rows.length} entries
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
