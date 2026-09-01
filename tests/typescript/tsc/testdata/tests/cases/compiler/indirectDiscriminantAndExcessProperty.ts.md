__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Blah",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 16
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 27,
                    "end": 31
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 33,
                        "end": 38
                      },
                      "start": 33,
                      "end": 38
                    },
                    "start": 31,
                    "end": 38
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 27,
                  "end": 39
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "abc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 43
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 45,
                      "end": 51
                    },
                    "start": 43,
                    "end": 51
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 40,
                  "end": 51
                }
              ],
              "start": 25,
              "end": 53
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 66
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "bar",
                        "raw": "\"bar\"",
                        "start": 68,
                        "end": 73
                      },
                      "start": 68,
                      "end": 73
                    },
                    "start": 66,
                    "end": 73
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 62,
                  "end": 74
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "xyz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 78
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 80,
                      "end": 86
                    },
                    "start": 78,
                    "end": 86
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 75,
                  "end": 87
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "extra",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 88,
                    "end": 93
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
                    },
                    "start": 93,
                    "end": 98
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 88,
                  "end": 98
                }
              ],
              "start": 60,
              "end": 100
            }
          ],
          "start": 23,
          "end": 100
        },
        "declare": false,
        "start": 7,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 101
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 125
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Blah",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 136
              },
              "typeArguments": null,
              "start": 132,
              "end": 136
            },
            "start": 130,
            "end": 136
          },
          "start": 126,
          "end": 136
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 139,
          "end": 143
        },
        "start": 137,
        "end": 143
      },
      "body": null,
      "expression": false,
      "start": 103,
      "end": 144
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 154
          },
          "init": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 157,
            "end": 162
          },
          "definite": false,
          "start": 150,
          "end": 162
        }
      ],
      "declare": false,
      "start": 146,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 169
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 180
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 186
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 176,
                "end": 186
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 195
                },
                "value": {
                  "type": "Literal",
                  "value": "hello!",
                  "raw": "\"hello!\"",
                  "start": 197,
                  "end": 205
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 192,
                "end": 205
              }
            ],
            "start": 170,
            "end": 207
          }
        ],
        "optional": false,
        "start": 164,
        "end": 208
      },
      "directive": null,
      "start": 164,
      "end": 209
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 219
          },
          "init": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 222,
            "end": 227
          },
          "definite": false,
          "start": 215,
          "end": 227
        }
      ],
      "declare": false,
      "start": 211,
      "end": 228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 234
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 241,
                  "end": 245
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 251
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 241,
                "end": 251
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 260
                },
                "value": {
                  "type": "Literal",
                  "value": "hello!",
                  "raw": "\"hello!\"",
                  "start": 262,
                  "end": 270
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 257,
                "end": 270
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extra",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 281
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 283,
                  "end": 286
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 276,
                "end": 286
              }
            ],
            "start": 235,
            "end": 289
          }
        ],
        "optional": false,
        "start": 229,
        "end": 290
      },
      "directive": null,
      "start": 229,
      "end": 291
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 300
          },
          "init": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 303,
            "end": 308
          },
          "definite": false,
          "start": 297,
          "end": 308
        }
      ],
      "declare": false,
      "start": 293,
      "end": 309
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 310,
          "end": 315
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 326
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 331
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 322,
                "end": 331
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xyz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 340
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 342,
                  "end": 345
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 337,
                "end": 345
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extra",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 356
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 358,
                  "end": 361
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 351,
                "end": 361
              }
            ],
            "start": 316,
            "end": 364
          }
        ],
        "optional": false,
        "start": 310,
        "end": 365
      },
      "directive": null,
      "start": 310,
      "end": 366
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 366
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
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Blah",
    "start": 12,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 68,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 103,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 111,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Blah",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 139,
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
    "value": "let",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 150,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 176,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "String",
    "value": "\"hello!\"",
    "start": 197,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "String",
    "value": "\"hello!\"",
    "start": 262,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 276,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 293,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 310,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 328,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 337,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 342,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 351,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  }
]
```
