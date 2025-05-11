
import React from "react";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

interface Column {
  key: string;
  header: string;
  cell?: (item: any) => React.ReactNode;
}

interface DataTableProps {
  data: any[];
  columns: Column[];
  caption?: string;
  actions?: {
    edit?: boolean;
    delete?: boolean;
    custom?: (item: any) => React.ReactNode;
  };
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
}

const DataTable = ({ 
  data, 
  columns, 
  caption, 
  actions = { edit: true, delete: true },
  onEdit,
  onDelete 
}: DataTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        {caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col.key}>{col.header}</TableHead>
            ))}
            {(actions.edit || actions.delete || actions.custom) && (
              <TableHead className="text-right">Actions</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((item) => (
              <TableRow key={item.id}>
                {columns.map((col) => (
                  <TableCell key={`${item.id}-${col.key}`}>
                    {col.cell ? col.cell(item) : item[col.key]}
                  </TableCell>
                ))}
                {(actions.edit || actions.delete || actions.custom) && (
                  <TableCell className="text-right space-x-2">
                    {actions.edit && (
                      <Button
                        onClick={() => onEdit && onEdit(item)}
                        size="sm"
                        variant="outline"
                        className="h-8 bg-amber-500 hover:bg-amber-600 text-black border-none"
                      >
                        Edit
                      </Button>
                    )}
                    {actions.delete && (
                      <Button
                        onClick={() => onDelete && onDelete(item)}
                        size="sm"
                        variant="outline"
                        className="h-8 bg-red-500 hover:bg-red-600 text-white border-none"
                      >
                        Delete
                      </Button>
                    )}
                    {actions.custom && actions.custom(item)}
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length + (actions ? 1 : 0)}
                className="h-24 text-center"
              >
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
