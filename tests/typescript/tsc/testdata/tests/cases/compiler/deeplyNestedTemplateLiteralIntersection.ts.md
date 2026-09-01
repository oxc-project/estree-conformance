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
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 9,
                "end": 12
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "a",
                  "cooked": "a"
                },
                "tail": true,
                "start": 18,
                "end": 21
              }
            ],
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 12,
                "end": 18
              }
            ],
            "start": 9,
            "end": 21
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
                  "name": "_thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 36
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 38,
                      "end": 42
                    },
                    "start": 38,
                    "end": 42
                  },
                  "start": 36,
                  "end": 42
                },
                "accessibility": null,
                "static": false,
                "start": 30,
                "end": 43
              }
            ],
            "start": 24,
            "end": 45
          }
        ],
        "start": 9,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_S",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 55
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 58,
              "end": 61
            },
            "start": 58,
            "end": 61
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "2",
              "raw": "\"2\"",
              "start": 64,
              "end": 67
            },
            "start": 64,
            "end": 67
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 70,
              "end": 73
            },
            "start": 70,
            "end": 73
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "4",
              "raw": "\"4\"",
              "start": 76,
              "end": 79
            },
            "start": 76,
            "end": 79
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "5",
              "raw": "\"5\"",
              "start": 82,
              "end": 85
            },
            "start": 82,
            "end": 85
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "6",
              "raw": "\"6\"",
              "start": 88,
              "end": 91
            },
            "start": 88,
            "end": 91
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "7",
              "raw": "\"7\"",
              "start": 94,
              "end": 97
            },
            "start": 94,
            "end": 97
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "8",
              "raw": "\"8\"",
              "start": 100,
              "end": 103
            },
            "start": 100,
            "end": 103
          }
        ],
        "start": 58,
        "end": 103
      },
      "declare": false,
      "start": 48,
      "end": 104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 115,
            "end": 118
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 120,
            "end": 123
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 125,
            "end": 127
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_S",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 120
            },
            "typeArguments": null,
            "start": 118,
            "end": 120
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_S",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 125
            },
            "typeArguments": null,
            "start": 123,
            "end": 125
          }
        ],
        "start": 115,
        "end": 127
      },
      "declare": false,
      "start": 106,
      "end": 128
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 137
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "typeArguments": null,
            "start": 140,
            "end": 141
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 145
            },
            "typeArguments": null,
            "start": 144,
            "end": 145
          }
        ],
        "start": 140,
        "end": 145
      },
      "declare": false,
      "start": 131,
      "end": 146
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 153
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 156,
            "end": 159
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false,
            "start": 160,
            "end": 164
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 165,
            "end": 167
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "typeArguments": null,
            "start": 159,
            "end": 160
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "typeArguments": null,
            "start": 164,
            "end": 165
          }
        ],
        "start": 156,
        "end": 167
      },
      "declare": false,
      "start": 147,
      "end": 168
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Props",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 187
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 197
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 205
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 207,
                          "end": 208
                        },
                        "typeArguments": null,
                        "start": 207,
                        "end": 208
                      },
                      "start": 205,
                      "end": 208
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 204,
                    "end": 209
                  }
                ],
                "start": 198,
                "end": 211
              }
            ],
            "start": 197,
            "end": 212
          },
          "start": 190,
          "end": 212
        },
        "declare": false,
        "start": 177,
        "end": 213
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 170,
      "end": 213
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 230
                },
                "typeArguments": null,
                "start": 225,
                "end": 230
              },
              "start": 223,
              "end": 230
            },
            "start": 221,
            "end": 230
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 233,
            "end": 235
          },
          "definite": false,
          "start": 221,
          "end": 235
        }
      ],
      "declare": false,
      "start": 215,
      "end": 236
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 252
                },
                "typeArguments": null,
                "start": 247,
                "end": 252
              },
              "start": 245,
              "end": 252
            },
            "start": 243,
            "end": 252
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 255,
            "end": 257
          },
          "definite": false,
          "start": 243,
          "end": 257
        }
      ],
      "declare": false,
      "start": 237,
      "end": 258
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 277
                },
                "start": 272,
                "end": 277
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 284
                },
                "start": 279,
                "end": 284
              }
            ],
            "start": 270,
            "end": 286
          },
          "definite": false,
          "start": 266,
          "end": 286
        }
      ],
      "declare": false,
      "start": 260,
      "end": 287
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 299
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 299
          },
          "exportKind": "value",
          "start": 298,
          "end": 299
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 289,
      "end": 302
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 302
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
    "value": "R",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 9,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 12,
    "end": 18
  },
  {
    "type": "Template",
    "value": "}a`",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "_thing",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 48,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "_S",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 62,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 64,
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
    "value": "\"3\"",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"4\"",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 80,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"5\"",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 86,
    "end": 87
  },
  {
    "type": "String",
    "value": "\"6\"",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 92,
    "end": 93
  },
  {
    "type": "String",
    "value": "\"7\"",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 98,
    "end": 99
  },
  {
    "type": "String",
    "value": "\"8\"",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 106,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "_S",
    "start": 118,
    "end": 120
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "_S",
    "start": 123,
    "end": 125
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 131,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 147,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 156,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 159,
    "end": 160
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 160,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 164,
    "end": 165
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 170,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 177,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 182,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 190,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "X",
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
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 215,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 237,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 243,
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
    "value": "Props",
    "start": 247,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 260,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 275,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 282,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  }
]
```
