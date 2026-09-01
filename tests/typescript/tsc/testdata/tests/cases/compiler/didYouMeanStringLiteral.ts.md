__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 10,
              "end": 18
            },
            "start": 10,
            "end": 18
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 21,
              "end": 29
            },
            "start": 21,
            "end": 29
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "boolean",
              "raw": "\"boolean\"",
              "start": 32,
              "end": 41
            },
            "start": 32,
            "end": 41
          }
        ],
        "start": 10,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 50
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 55
            },
            "typeArguments": null,
            "start": 53,
            "end": 55
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 59,
                  "end": 67
                },
                "start": 59,
                "end": 67
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 70,
                  "end": 79
                },
                "start": 70,
                "end": 79
              }
            ],
            "start": 59,
            "end": 79
          }
        ],
        "start": 53,
        "end": 80
      },
      "declare": false,
      "start": 43,
      "end": 81
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 113
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 118
            },
            "typeArguments": null,
            "start": 116,
            "end": 118
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 122,
                  "end": 130
                },
                "start": 122,
                "end": 130
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 133,
                  "end": 142
                },
                "start": 133,
                "end": 142
              }
            ],
            "start": 122,
            "end": 142
          }
        ],
        "start": 116,
        "end": 143
      },
      "declare": false,
      "start": 106,
      "end": 144
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 182
                },
                "typeArguments": null,
                "start": 180,
                "end": 182
              },
              "start": 178,
              "end": 182
            },
            "start": 176,
            "end": 182
          },
          "init": {
            "type": "Literal",
            "value": "strong",
            "raw": "\"strong\"",
            "start": 185,
            "end": 193
          },
          "definite": false,
          "start": 176,
          "end": 193
        }
      ],
      "declare": false,
      "start": 170,
      "end": 194
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 207
                },
                "typeArguments": null,
                "start": 205,
                "end": 207
              },
              "start": 203,
              "end": 207
            },
            "start": 201,
            "end": 207
          },
          "init": {
            "type": "Literal",
            "value": "strong",
            "raw": "\"strong\"",
            "start": 210,
            "end": 218
          },
          "definite": false,
          "start": 201,
          "end": 218
        }
      ],
      "declare": false,
      "start": 195,
      "end": 219
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 232
                },
                "typeArguments": null,
                "start": 230,
                "end": 232
              },
              "start": 228,
              "end": 232
            },
            "start": 226,
            "end": 232
          },
          "init": {
            "type": "Literal",
            "value": "strong",
            "raw": "\"strong\"",
            "start": 235,
            "end": 243
          },
          "definite": false,
          "start": 226,
          "end": 243
        }
      ],
      "declare": false,
      "start": 220,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 244
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 5,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 19,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 21,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 32,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 43,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 48,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 59,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 68,
    "end": 69
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 70,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 106,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 122,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 131,
    "end": 132
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 133,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 170,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 176,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "String",
    "value": "\"strong\"",
    "start": 185,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 195,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 205,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "String",
    "value": "\"strong\"",
    "start": 210,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 220,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 230,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "String",
    "value": "\"strong\"",
    "start": 235,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  }
]
```
