__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 30
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 45
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 53,
                "end": 60
              },
              "start": 51,
              "end": 60
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 61
          }
        ],
        "start": 14,
        "end": 63
      },
      "declare": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 80
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Omit",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 87
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 91
                },
                "typeArguments": null,
                "start": 88,
                "end": 91
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 93,
                  "end": 96
                },
                "start": 93,
                "end": 96
              }
            ],
            "start": 87,
            "end": 97
          },
          "start": 83,
          "end": 97
        },
        "declare": false,
        "start": 72,
        "end": 98
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 65,
      "end": 98
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 114
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Omit",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 121
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 125
                },
                "typeArguments": null,
                "start": 122,
                "end": 125
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 127,
                      "end": 130
                    },
                    "start": 127,
                    "end": 130
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 133,
                      "end": 136
                    },
                    "start": 133,
                    "end": 136
                  }
                ],
                "start": 127,
                "end": 136
              }
            ],
            "start": 121,
            "end": 137
          },
          "start": 117,
          "end": 137
        },
        "declare": false,
        "start": 106,
        "end": 138
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 99,
      "end": 138
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getBarA",
          "optional": false,
          "typeAnnotation": null,
          "start": 156,
          "end": 163
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 172
                },
                "typeArguments": null,
                "start": 169,
                "end": 172
              },
              "start": 167,
              "end": 172
            },
            "start": 164,
            "end": 172
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 190
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 192
                },
                "optional": false,
                "computed": false,
                "start": 187,
                "end": 192
              },
              "start": 180,
              "end": 193
            }
          ],
          "start": 174,
          "end": 195
        },
        "expression": false,
        "start": 147,
        "end": 195
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 140,
      "end": 195
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getBazA",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 220
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 229
                },
                "typeArguments": null,
                "start": 226,
                "end": 229
              },
              "start": 224,
              "end": 229
            },
            "start": 221,
            "end": 229
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 247
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 249
                },
                "optional": false,
                "computed": false,
                "start": 244,
                "end": 249
              },
              "start": 237,
              "end": 250
            }
          ],
          "start": 231,
          "end": 252
        },
        "expression": false,
        "start": 204,
        "end": 252
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 197,
      "end": 252
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 253
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 53,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 65,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 72,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 83,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 99,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 106,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 127,
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
    "value": "\"c\"",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 140,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 147,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "getBarA",
    "start": 156,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 180,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 187,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 197,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 204,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "getBazA",
    "start": 213,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 237,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  }
]
```
