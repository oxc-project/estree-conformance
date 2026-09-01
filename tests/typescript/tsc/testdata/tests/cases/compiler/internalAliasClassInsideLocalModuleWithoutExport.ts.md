__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 53
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 57,
                                "end": 63
                              },
                              "start": 55,
                              "end": 63
                            },
                            "start": 54,
                            "end": 63
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 86,
                                "end": 87
                              },
                              "start": 79,
                              "end": 88
                            }
                          ],
                          "start": 65,
                          "end": 98
                        },
                        "expression": false,
                        "start": 53,
                        "end": 98
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 50,
                      "end": 98
                    }
                  ],
                  "start": 40,
                  "end": 104
                },
                "abstract": false,
                "declare": false,
                "start": 32,
                "end": 104
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 104
            }
          ],
          "start": 19,
          "end": 106
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 106
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 127
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 153
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "TSImportEqualsDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 171,
                        "end": 172
                      },
                      "moduleReference": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 175,
                          "end": 176
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 177,
                          "end": 178
                        },
                        "start": 175,
                        "end": 178
                      },
                      "importKind": "value",
                      "start": 164,
                      "end": 179
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cProp",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 199,
                              "end": 204
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 211,
                                "end": 212
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 207,
                              "end": 214
                            },
                            "definite": false,
                            "start": 199,
                            "end": 214
                          }
                        ],
                        "declare": false,
                        "start": 195,
                        "end": 215
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 188,
                      "end": 215
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
                            "name": "cReturnVal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 228,
                            "end": 238
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "cProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 241,
                                "end": 246
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 247,
                                "end": 250
                              },
                              "optional": false,
                              "computed": false,
                              "start": 241,
                              "end": 250
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 251,
                                "end": 253
                              }
                            ],
                            "optional": false,
                            "start": 241,
                            "end": 254
                          },
                          "definite": false,
                          "start": 228,
                          "end": 254
                        }
                      ],
                      "declare": false,
                      "start": 224,
                      "end": 255
                    }
                  ],
                  "start": 154,
                  "end": 261
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 141,
                "end": 261
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 134,
              "end": 261
            }
          ],
          "start": 128,
          "end": 263
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 115,
        "end": 263
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 108,
      "end": 263
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 263
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
    "value": "namespace",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 79,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 108,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 115,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 134,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 141,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 164,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 175,
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
    "value": "c",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 188,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "cProp",
    "start": 199,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 207,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 224,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "cReturnVal",
    "start": 228,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "cProp",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  }
]
```
