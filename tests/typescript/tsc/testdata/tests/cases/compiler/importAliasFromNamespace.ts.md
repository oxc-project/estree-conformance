__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "My",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 12
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Internal",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 21
        },
        "start": 10,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "getThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 52
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 56,
                  "end": 60
                },
                "start": 54,
                "end": 60
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 61,
                "end": 63
              },
              "expression": false,
              "start": 35,
              "end": 63
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 28,
            "end": 63
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "WhichThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 96
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 107,
                      "end": 108
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 107,
                    "end": 108
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 111
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 110,
                    "end": 111
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 114
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 113,
                    "end": 114
                  }
                ],
                "start": 97,
                "end": 120
              },
              "const": true,
              "declare": false,
              "start": 75,
              "end": 120
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 68,
            "end": 120
          }
        ],
        "start": 22,
        "end": 122
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 122
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 123
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
    "value": "My",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Internal",
    "start": 13,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 28,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 35,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "getThing",
    "start": 44,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
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
    "start": 68,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 75,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 81,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "WhichThing",
    "start": 86,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 74
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 80
        },
        "start": 65,
        "end": 80
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Internal",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 102
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "My",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 107
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Internal",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 116
              },
              "start": 105,
              "end": 116
            },
            "importKind": "value",
            "start": 87,
            "end": 117
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 138
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_which",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 157,
                      "end": 163
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Internal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 173
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "WhichThing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 184
                          },
                          "start": 165,
                          "end": 184
                        },
                        "typeArguments": null,
                        "start": 165,
                        "end": 184
                      },
                      "start": 163,
                      "end": 184
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 149,
                    "end": 185
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 205
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Internal",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 222,
                                  "end": 230
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getThing",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 231,
                                  "end": 239
                                },
                                "optional": false,
                                "computed": false,
                                "start": 222,
                                "end": 239
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 222,
                              "end": 241
                            },
                            "directive": null,
                            "start": 222,
                            "end": 242
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Internal",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 255,
                                    "end": 263
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "WhichThing",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 264,
                                    "end": 274
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 255,
                                  "end": 274
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 275,
                                  "end": 276
                                },
                                "optional": false,
                                "computed": false,
                                "start": 255,
                                "end": 276
                              },
                              "consequent": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "\"foo\"",
                                "start": 279,
                                "end": 284
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "\"bar\"",
                                "start": 287,
                                "end": 292
                              },
                              "start": 255,
                              "end": 292
                            },
                            "directive": null,
                            "start": 255,
                            "end": 293
                          }
                        ],
                        "start": 208,
                        "end": 303
                      },
                      "expression": false,
                      "start": 205,
                      "end": 303
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 194,
                    "end": 303
                  }
                ],
                "start": 139,
                "end": 309
              },
              "abstract": false,
              "declare": false,
              "start": 129,
              "end": 309
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 122,
            "end": 309
          }
        ],
        "start": 81,
        "end": 311
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 55,
      "end": 311
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 55,
  "end": 311
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 55,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "SomeOther",
    "start": 65,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 75,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 87,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Internal",
    "start": 94,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "My",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Internal",
    "start": 108,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 122,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 129,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 149,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "_which",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "Internal",
    "start": 165,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "WhichThing",
    "start": 174,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 194,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "Internal",
    "start": 222,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "getThing",
    "start": 231,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Internal",
    "start": 255,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "WhichThing",
    "start": 264,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 277,
    "end": 278
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  }
]
```
