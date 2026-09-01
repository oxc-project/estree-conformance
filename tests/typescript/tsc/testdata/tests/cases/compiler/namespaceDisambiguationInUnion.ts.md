__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yep",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 33
              },
              "typeParameters": null,
              "typeAnnotation": {
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
                      "start": 38,
                      "end": 42
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "foo.yep",
                          "raw": "\"foo.yep\"",
                          "start": 44,
                          "end": 53
                        },
                        "start": 44,
                        "end": 53
                      },
                      "start": 42,
                      "end": 53
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 38,
                    "end": 53
                  }
                ],
                "start": 36,
                "end": 55
              },
              "declare": false,
              "start": 25,
              "end": 56
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 56
          }
        ],
        "start": 14,
        "end": 58
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 58
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 73
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yep",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 93
              },
              "typeParameters": null,
              "typeAnnotation": {
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
                      "start": 98,
                      "end": 102
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "bar.yep",
                          "raw": "\"bar.yep\"",
                          "start": 104,
                          "end": 113
                        },
                        "start": 104,
                        "end": 113
                      },
                      "start": 102,
                      "end": 113
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 98,
                    "end": 113
                  }
                ],
                "start": 96,
                "end": 115
              },
              "declare": false,
              "start": 85,
              "end": 116
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 78,
            "end": 116
          }
        ],
        "start": 74,
        "end": 118
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 60,
      "end": 118
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "init": {
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
                  "start": 132,
                  "end": 136
                },
                "value": {
                  "type": "Literal",
                  "value": "wat.nup",
                  "raw": "\"wat.nup\"",
                  "start": 138,
                  "end": 147
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 132,
                "end": 147
              }
            ],
            "start": 130,
            "end": 149
          },
          "definite": false,
          "start": 126,
          "end": 149
        }
      ],
      "declare": false,
      "start": 120,
      "end": 150
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
            "name": "val1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 166
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 170
                      },
                      "start": 163,
                      "end": 170
                    },
                    "typeArguments": null,
                    "start": 163,
                    "end": 170
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 176
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 180
                      },
                      "start": 173,
                      "end": 180
                    },
                    "typeArguments": null,
                    "start": 173,
                    "end": 180
                  }
                ],
                "start": 163,
                "end": 180
              },
              "start": 161,
              "end": 180
            },
            "start": 157,
            "end": 180
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 184
          },
          "definite": false,
          "start": 157,
          "end": 184
        }
      ],
      "declare": false,
      "start": 151,
      "end": 185
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
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
                      "start": 200,
                      "end": 204
                    },
                    "value": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 206,
                      "end": 209
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 200,
                    "end": 209
                  }
                ],
                "start": 198,
                "end": 211
              },
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
                      "start": 215,
                      "end": 219
                    },
                    "value": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 221,
                      "end": 224
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 215,
                    "end": 224
                  }
                ],
                "start": 213,
                "end": 226
              }
            ],
            "start": 197,
            "end": 227
          },
          "definite": false,
          "start": 193,
          "end": 227
        }
      ],
      "declare": false,
      "start": 187,
      "end": 228
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
            "name": "val2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 242,
                        "end": 245
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 246,
                        "end": 249
                      },
                      "start": 242,
                      "end": 249
                    },
                    "typeArguments": null,
                    "start": 242,
                    "end": 249
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 251,
                        "end": 254
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 255,
                        "end": 258
                      },
                      "start": 251,
                      "end": 258
                    },
                    "typeArguments": null,
                    "start": 251,
                    "end": 258
                  }
                ],
                "start": 241,
                "end": 259
              },
              "start": 239,
              "end": 259
            },
            "start": 235,
            "end": 259
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 263
          },
          "definite": false,
          "start": 235,
          "end": 263
        }
      ],
      "declare": false,
      "start": 229,
      "end": 264
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 264
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
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
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 25,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "Yep",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "String",
    "value": "\"foo.yep\"",
    "start": 44,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 60,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 78,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 85,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Yep",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "String",
    "value": "\"bar.yep\"",
    "start": 104,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "String",
    "value": "\"wat.nup\"",
    "start": 138,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 151,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "val1",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Yep",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Yep",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 187,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "type",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 206,
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
    "value": ",",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 229,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "val2",
    "start": 235,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Yep",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "Yep",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  }
]
```
