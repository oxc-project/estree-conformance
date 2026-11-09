__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Token",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 16
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 26
            },
            "initializer": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 29,
              "end": 30
            },
            "computed": false,
            "start": 23,
            "end": 30
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Word",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 40
            },
            "initializer": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "word",
                "raw": "\"word\"",
                "start": 43,
                "end": 49
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 53,
                "end": 59
              },
              "start": 43,
              "end": 59
            },
            "computed": false,
            "start": 36,
            "end": 59
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Marker",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "initializer": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              },
              "expression": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 82,
                "end": 83
              },
              "start": 74,
              "end": 83
            },
            "computed": false,
            "start": 65,
            "end": 83
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Flag",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 93
            },
            "initializer": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 96,
                "end": 97
              },
              "start": 96,
              "end": 98
            },
            "computed": false,
            "start": 89,
            "end": 98
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Count",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 109
            },
            "initializer": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 112,
                "end": 113
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
              },
              "start": 112,
              "end": 130
            },
            "computed": false,
            "start": 104,
            "end": 130
          }
        ],
        "start": 17,
        "end": 133
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 133
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "end",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 151
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Token",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 159
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "End",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 163
              },
              "optional": false,
              "computed": false,
              "start": 154,
              "end": 163
            },
            "definite": false,
            "start": 148,
            "end": 163
          }
        ],
        "declare": false,
        "start": 142,
        "end": 164
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 135,
      "end": 164
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 164
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 6,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "Token",
    "start": 11,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Word",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "String",
    "value": "\"word\"",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 50,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Marker",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Flag",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Count",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 114,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 135,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 142,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "Token",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 160,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  }
]
```
