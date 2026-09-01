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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 34
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSEnumDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 53,
                        "end": 55
                      },
                      "body": {
                        "type": "TSEnumBody",
                        "members": [
                          {
                            "type": "TSEnumMember",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 64,
                              "end": 65
                            },
                            "initializer": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 68,
                              "end": 69
                            },
                            "computed": false,
                            "start": 64,
                            "end": 69
                          },
                          {
                            "type": "TSEnumMember",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 77,
                              "end": 78
                            },
                            "initializer": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 81,
                                "end": 82
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 83,
                                "end": 84
                              },
                              "optional": false,
                              "computed": false,
                              "start": 81,
                              "end": 84
                            },
                            "computed": false,
                            "start": 77,
                            "end": 84
                          }
                        ],
                        "start": 56,
                        "end": 107
                      },
                      "const": false,
                      "declare": false,
                      "start": 48,
                      "end": 107
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 41,
                    "end": 107
                  }
                ],
                "start": 35,
                "end": 111
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 23,
              "end": 111
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 111
          }
        ],
        "start": 12,
        "end": 113
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 113
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
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
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 149
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSEnumDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 170
                      },
                      "body": {
                        "type": "TSEnumBody",
                        "members": [
                          {
                            "type": "TSEnumMember",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 179,
                              "end": 180
                            },
                            "initializer": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "M",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 183,
                                    "end": 184
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "N",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 185,
                                    "end": 186
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 183,
                                  "end": 186
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 187,
                                  "end": 189
                                },
                                "optional": false,
                                "computed": false,
                                "start": 183,
                                "end": 189
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 190,
                                "end": 191
                              },
                              "optional": false,
                              "computed": false,
                              "start": 183,
                              "end": 191
                            },
                            "computed": false,
                            "start": 179,
                            "end": 191
                          },
                          {
                            "type": "TSEnumMember",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 199,
                              "end": 200
                            },
                            "initializer": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "M",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 203,
                                      "end": 204
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "N",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 205,
                                      "end": 206
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 203,
                                    "end": 206
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 207,
                                    "end": 209
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 203,
                                  "end": 209
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 210,
                                  "end": 211
                                },
                                "optional": false,
                                "computed": false,
                                "start": 203,
                                "end": 211
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 212,
                                "end": 213
                              },
                              "optional": false,
                              "computed": false,
                              "start": 203,
                              "end": 213
                            },
                            "computed": false,
                            "start": 199,
                            "end": 213
                          }
                        ],
                        "start": 171,
                        "end": 236
                      },
                      "const": false,
                      "declare": false,
                      "start": 163,
                      "end": 236
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 156,
                    "end": 236
                  }
                ],
                "start": 150,
                "end": 240
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 138,
              "end": 240
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 131,
            "end": 240
          }
        ],
        "start": 127,
        "end": 242
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 115,
      "end": 242
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 242
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
    "value": "M",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 16,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 23,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 41,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 48,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 64,
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
    "value": "1",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 115,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 131,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 138,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 156,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 163,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 179,
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
    "value": "M",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  }
]
```
