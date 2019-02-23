export = DeputyGateway;

declare class DeputyGateway {
    constructor(subdomain: string, token: string);
    get(endpoint: string): Promise<any>;
    post(endpoint: string, body: any): Promise<any>;
}

declare namespace DeputyGateway {
    export interface IEmployee {
        Id?: number;
        Company: number;
        FirstName: string;
        LastName: string;
        DisplayName: string;
        OtherName?: string;
        Salutation?: string;
        MainAddress?: number;
        PostalAddress?: number;
        Contact: number;
        EmergencyAddress?: number;
        DateOfBirth?: string;
        Gender?: number;
        Photo?: number;
        UserId?: number;
        JobAppId?: number;
        Active: boolean;
        StartDate?: string;
        TerminationDate?: string;
        StressProfile?: number;
        Position?: string;
        HigherDuty?: boolean;
        Role: number;
        AllowAppraisal: boolean;
        HistoryId?: number;
        CustomFieldData?: number;
        Creator?: number;
        Created?: string;
        Modified?: string;
    }

    export interface IEmployeeAgreement {
        Id?: number;
        EmployeeId: number;
        PayPoint: number;
        EmpType: number;
        CompanyName?: string;
        Active: boolean;
        StartDate: string;
        Contract?: number;
        SalaryPayRule?: number;
        ContractFile?: number;
        PayrollId?: string;
        PayPeriod: number;
        HistoryId?: number;
        Creator?: number;
        Created?: string;
        Modified?:string;
    }

    export interface IEmploymentContract {
        Id?: number;
        Code?: string;
        Name: string;
        Description?: string;
        EmploymentBasis: number;
        EmploymentCategory: number;
        EmploymentStatus: number;
        EmploymentCondition?: number;
        BasePayRule: number;
        StressProfile?: number;
        StartDate?: string;
        EndDate?: string;
        PeriodType: number;
        File?: number;
        StrictLeaveApproval?: number;
        Creator?: number;
        Created?: string;
        Modified?: string;
    }

    export interface IPayRules {
        Id?: number;
        PayTitle: string;
        RemunerationType: number;
        RemunerationBy: number;
        AnnualSalary?: number;
        HourlyRate?: number;
        IsMultiplier?: boolean;
        MultiplierValue?: number;
        MultiplierBaseRate?: number;
        MinimumType?: number;
        MaximumType?: number;
        MinimumValue?: number;
        MaximumValue?: number;
        MinimumShiftLength?: string;
        MaximumShiftLength?: string;
        AdvancedCalculation?: string;
        IsExported: boolean;
        UnitValue?: number;
        Schedule?: number;
        RecommendWith?: number;
        DexmlScript?: number;
        DexmlScriptParam?: string;
        PeriodType?: number;
        PayPortionRule?: number;
        PayrollCategory?: string;
        Comment?: string;
        Creator?: number;
        Created?: string;
        Modified?: string;
    }

    export interface ITimesheet {
        Id?: number;
        Employee: number;
        EmployeeHistory?: number;
        EmployeeAgreement?: number;
        Date?: string;
        StartTime: number;
        EndTime?: number;
        Mealbreak: string;
        MealbreakSlots?: any;
        TotalTime: number;
        TotalTimeInv: number;
        Cost?: number;
        Roster?: number;
        EmployeeComment?: string;
        SupervisorComment?: string;
        Supervisor?: number;
        Disputed: boolean;
        TimeApproved: boolean;
        TimeApprover?: number;
        Discarded?: boolean;
        ValidationFlag: number;
        OperationalUnit?: number;
        IsInProgress?: boolean;
        IsLeave?: boolean;
        LeaveId?: number;
        LeaveRule?: number;
        Invoiced: boolean;
        InvoiceComment?: string;
        PayRuleApproved: boolean;
        Exported?: boolean;
        StagingId?: number;
        PayStaged: boolean;
        PaycycleId: number;
        File?: number;
        CustomFieldData?: number;
        RealTime?: boolean;
        AutoProcessed?: boolean;
        AutoRounded?: boolean;
        AutoTimeApproved?: boolean;
        AutoPayRuleApproved?: boolean;
        Creator?: number;
        Created?: string;
        Modified?: string;
        OnCost?: number;
        StartTimeLocalized?: string;
        EndTimeLocalized?: string;
    }

    export interface IRoster {
        Id?: number;
        Date?: string;
        StartTime: number;
        EndTime: number;
        Mealbreak?: string;
        TotalTime?: number;
        Cost?: number;
        OperationUnit?: number;
        Employee?: number;
        Comment?: string;
        Warning?: string;
        WarningOverrideComment?: string;
        Published?: boolean;
        MatchedByTimesheet?: number;
        Open?: boolean;
        ConfirmStatus?: number;
        ConfirmComment?: string;
        ConfirmTime: number;
        SwapStatus: number;
        SwapManageBy: number;
        Creator: number;
        Created: string;
        Modified: string;
    }

    export interface IOperationalUnit {
        Id?: number;
        Creator?: number;
        Created?: string;
        Modified?: string;
        Company: number;
        ParentOperationalUnit?: number;
        OperationalUnitName: string;
        Active?: boolean;
        PayrollExportName?: string;
        Address?: number;
        Contact?: number;
        RosterSortOrder?: number;
        ShowOnRoster: boolean;
        RosterActiveHoursSchedule?: number;
        DailyRosterBudget?: number;
    }
}
