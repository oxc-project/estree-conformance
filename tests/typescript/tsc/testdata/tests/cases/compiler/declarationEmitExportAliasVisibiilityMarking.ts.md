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
        "name": "Suit",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Hearts",
              "raw": "'Hearts'",
              "start": 12,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Spades",
              "raw": "'Spades'",
              "start": 23,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Clubs",
              "raw": "'Clubs'",
              "start": 34,
              "end": 41
            },
            "start": 34,
            "end": 41
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Diamonds",
              "raw": "'Diamonds'",
              "start": 44,
              "end": 54
            },
            "start": 44,
            "end": 54
          }
        ],
        "start": 12,
        "end": 54
      },
      "declare": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rank",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 65
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 68,
              "end": 69
            },
            "start": 68,
            "end": 69
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 72,
              "end": 73
            },
            "start": 72,
            "end": 73
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 76,
              "end": 77
            },
            "start": 76,
            "end": 77
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 80,
              "end": 81
            },
            "start": 80,
            "end": 81
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 84,
              "end": 85
            },
            "start": 84,
            "end": 85
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 88,
              "end": 89
            },
            "start": 88,
            "end": 89
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 92,
              "end": 93
            },
            "start": 92,
            "end": 93
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 7,
              "raw": "7",
              "start": 96,
              "end": 97
            },
            "start": 96,
            "end": 97
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 100,
              "end": 101
            },
            "start": 100,
            "end": 101
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 9,
              "raw": "9",
              "start": 104,
              "end": 105
            },
            "start": 104,
            "end": 105
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 108,
              "end": 110
            },
            "start": 108,
            "end": 110
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Jack",
              "raw": "'Jack'",
              "start": 113,
              "end": 119
            },
            "start": 113,
            "end": 119
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Queen",
              "raw": "'Queen'",
              "start": 122,
              "end": 129
            },
            "start": 122,
            "end": 129
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "King",
              "raw": "'King'",
              "start": 132,
              "end": 138
            },
            "start": 132,
            "end": 138
          }
        ],
        "start": 68,
        "end": 138
      },
      "declare": false,
      "start": 56,
      "end": 139
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 153
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 153
          },
          "exportKind": "value",
          "start": 149,
          "end": 153
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 159
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 159
          },
          "exportKind": "value",
          "start": 155,
          "end": 159
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 140,
      "end": 162
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 163
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
    "value": "Suit",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "String",
    "value": "'Hearts'",
    "start": 12,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 21,
    "end": 22
  },
  {
    "type": "String",
    "value": "'Spades'",
    "start": 23,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 32,
    "end": 33
  },
  {
    "type": "String",
    "value": "'Clubs'",
    "start": 34,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 42,
    "end": 43
  },
  {
    "type": "String",
    "value": "'Diamonds'",
    "start": 44,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 56,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Rank",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 70,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 78,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 86,
    "end": 87
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 94,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 98,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 102,
    "end": 103
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 106,
    "end": 107
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 111,
    "end": 112
  },
  {
    "type": "String",
    "value": "'Jack'",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 120,
    "end": 121
  },
  {
    "type": "String",
    "value": "'Queen'",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "'King'",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Suit",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Rank",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 19
          },
          "importKind": "value",
          "start": 15,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Types",
        "raw": "'./Types'",
        "start": 27,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 37
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "suit",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Suit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 64
                },
                "typeArguments": null,
                "start": 60,
                "end": 64
              },
              "start": 58,
              "end": 64
            },
            "start": 54,
            "end": 64
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "rank",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rank",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 76
                },
                "typeArguments": null,
                "start": 72,
                "end": 76
              },
              "start": 70,
              "end": 76
            },
            "start": 66,
            "end": 76
          }
        ],
        "returnType": null,
        "body": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "suit",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 87
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "suit",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 87
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 83,
              "end": 87
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "rank",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 93
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "rank",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 93
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 89,
              "end": 93
            }
          ],
          "start": 82,
          "end": 94
        },
        "id": null,
        "generator": false,
        "start": 53,
        "end": 95
      },
      "exportKind": "value",
      "start": 38,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Suit",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Rank",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26
  },
  {
    "type": "String",
    "value": "'./Types'",
    "start": 27,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 38,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 45,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "suit",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Suit",
    "start": 60,
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
    "value": "rank",
    "start": 66,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Rank",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "suit",
    "start": 83,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "rank",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "lazyCard",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 19
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ImportExpression",
                    "source": {
                      "type": "Literal",
                      "value": "./Card",
                      "raw": "'./Card'",
                      "start": 35,
                      "end": 43
                    },
                    "options": null,
                    "phase": null,
                    "start": 28,
                    "end": 44
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 49
                  },
                  "optional": false,
                  "computed": false,
                  "start": 28,
                  "end": 49
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 51
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 55,
                        "end": 56
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "default",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 57,
                        "end": 64
                      },
                      "optional": false,
                      "computed": false,
                      "start": 55,
                      "end": 64
                    },
                    "id": null,
                    "generator": false,
                    "start": 50,
                    "end": 64
                  }
                ],
                "optional": false,
                "start": 28,
                "end": 65
              },
              "id": null,
              "generator": false,
              "start": 22,
              "end": 65
            },
            "definite": false,
            "start": 11,
            "end": 65
          }
        ],
        "declare": false,
        "start": 7,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 80
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 80
          },
          "exportKind": "value",
          "start": 76,
          "end": 80
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 86
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 86
          },
          "exportKind": "value",
          "start": 82,
          "end": 86
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Types",
        "raw": "'./Types'",
        "start": 94,
        "end": 103
      },
      "exportKind": "value",
      "attributes": [],
      "start": 67,
      "end": 104
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "lazyCard",
    "start": 11,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 25,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "String",
    "value": "'./Card'",
    "start": 35,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 52,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Suit",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Rank",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 89,
    "end": 93
  },
  {
    "type": "String",
    "value": "'./Types'",
    "start": 94,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  }
]
```
