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
        "name": "days",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "monday",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 22
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 22
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "tuesday",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 35
            },
            "initializer": null,
            "computed": false,
            "start": 28,
            "end": 35
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "wednesday",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 50
            },
            "initializer": null,
            "computed": false,
            "start": 41,
            "end": 50
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "thursday",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 64
            },
            "initializer": null,
            "computed": false,
            "start": 56,
            "end": 64
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "friday",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 76
            },
            "initializer": null,
            "computed": false,
            "start": 70,
            "end": 76
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "saturday",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 90
            },
            "initializer": null,
            "computed": false,
            "start": 82,
            "end": 90
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "sunday",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 102
            },
            "initializer": null,
            "computed": false,
            "start": 96,
            "end": 102
          }
        ],
        "start": 10,
        "end": 104
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 104
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "weekendDay",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 120
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "days",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 127
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "saturday",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 136
            },
            "optional": false,
            "computed": false,
            "start": 123,
            "end": 136
          },
          "definite": false,
          "start": 110,
          "end": 136
        }
      ],
      "declare": false,
      "start": 106,
      "end": 137
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "daysOfMonth",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 153
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "days",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 160
          },
          "definite": false,
          "start": 142,
          "end": 160
        }
      ],
      "declare": false,
      "start": 138,
      "end": 161
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "daysOfYear",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "days",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 189
                },
                "typeArguments": null,
                "start": 178,
                "end": 189
              },
              "start": 176,
              "end": 189
            },
            "start": 166,
            "end": 189
          },
          "init": null,
          "definite": false,
          "start": 166,
          "end": 189
        }
      ],
      "declare": false,
      "start": 162,
      "end": 190
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 190
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "days",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "monday",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "tuesday",
    "start": 28,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "wednesday",
    "start": 41,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "thursday",
    "start": 56,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "friday",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "saturday",
    "start": 82,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "sunday",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 106,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "weekendDay",
    "start": 110,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "days",
    "start": 123,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "saturday",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "daysOfMonth",
    "start": 142,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "days",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 162,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "daysOfYear",
    "start": 166,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 178,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "days",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  }
]
```
