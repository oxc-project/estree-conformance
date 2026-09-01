__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Translation",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 28
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
                "name": "translationKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 47
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
                      "name": "Translation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 60
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TranslationKeyEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 79
                    },
                    "start": 49,
                    "end": 79
                  },
                  "typeArguments": null,
                  "start": 49,
                  "end": 79
                },
                "start": 47,
                "end": 79
              },
              "accessibility": null,
              "static": false,
              "start": 33,
              "end": 80
            }
          ],
          "start": 29,
          "end": 82
        },
        "declare": false,
        "start": 7,
        "end": 82
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 82
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Translation",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 112
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
                  "name": "TranslationKeyEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 147
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "translation1",
                        "raw": "'translation1'",
                        "start": 150,
                        "end": 164
                      },
                      "start": 150,
                      "end": 164
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "translation2",
                        "raw": "'translation2'",
                        "start": 167,
                        "end": 181
                      },
                      "start": 167,
                      "end": 181
                    }
                  ],
                  "start": 150,
                  "end": 181
                },
                "declare": false,
                "start": 124,
                "end": 182
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 117,
              "end": 182
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TranslationKeyEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 216
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
                            "name": "Translation1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 225,
                            "end": 237
                          },
                          "value": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "value": "translation1",
                              "raw": "'translation1'",
                              "start": 239,
                              "end": 253
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TranslationKeyEnum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 257,
                                "end": 275
                              },
                              "typeArguments": null,
                              "start": 257,
                              "end": 275
                            },
                            "start": 239,
                            "end": 275
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 225,
                          "end": 275
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Translation2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 281,
                            "end": 293
                          },
                          "value": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "value": "translation2",
                              "raw": "'translation2'",
                              "start": 295,
                              "end": 309
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TranslationKeyEnum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 313,
                                "end": 331
                              },
                              "typeArguments": null,
                              "start": 313,
                              "end": 331
                            },
                            "start": 295,
                            "end": 331
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 281,
                          "end": 331
                        }
                      ],
                      "start": 219,
                      "end": 336
                    },
                    "definite": false,
                    "start": 198,
                    "end": 336
                  }
                ],
                "declare": false,
                "start": 192,
                "end": 336
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 185,
              "end": 336
            }
          ],
          "start": 113,
          "end": 338
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 91,
        "end": 338
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 84,
      "end": 338
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 340
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Translation",
    "start": 17,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "translationKey",
    "start": 33,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "Translation",
    "start": 49,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "TranslationKeyEnum",
    "start": 61,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 84,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 91,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Translation",
    "start": 101,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 117,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 124,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "TranslationKeyEnum",
    "start": 129,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "String",
    "value": "'translation1'",
    "start": 150,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "'translation2'",
    "start": 167,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 185,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 192,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "TranslationKeyEnum",
    "start": 198,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Translation1",
    "start": 225,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "String",
    "value": "'translation1'",
    "start": 239,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 254,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "TranslationKeyEnum",
    "start": 257,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Translation2",
    "start": 281,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "String",
    "value": "'translation2'",
    "start": 295,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 310,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "TranslationKeyEnum",
    "start": 313,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
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
            "name": "Translation",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Translation",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./translation",
        "raw": "\"./translation\"",
        "start": 28,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 44
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TranslationKeyEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 70
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Translation",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 84
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "TranslationKeyEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 103
        },
        "start": 73,
        "end": 103
      },
      "importKind": "value",
      "start": 45,
      "end": 104
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 123
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
                "name": "TranslationKeyEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 146
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "TranslationKeyEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 167
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 128,
              "end": 168
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "print",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 176
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
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 185,
                            "end": 192
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 193,
                            "end": 196
                          },
                          "optional": false,
                          "computed": false,
                          "start": 185,
                          "end": 196
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TranslationKeyEnum",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 197,
                              "end": 215
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Translation1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 216,
                              "end": 228
                            },
                            "optional": false,
                            "computed": false,
                            "start": 197,
                            "end": 228
                          }
                        ],
                        "optional": false,
                        "start": 185,
                        "end": 229
                      },
                      "directive": null,
                      "start": 185,
                      "end": 230
                    }
                  ],
                  "start": 179,
                  "end": 234
                },
                "expression": false,
                "start": 176,
                "end": 234
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 171,
              "end": 234
            }
          ],
          "start": 124,
          "end": 236
        },
        "abstract": false,
        "declare": false,
        "start": 113,
        "end": 236
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 106,
      "end": 236
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 237
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
    "value": "Translation",
    "start": 9,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 23,
    "end": 27
  },
  {
    "type": "String",
    "value": "\"./translation\"",
    "start": 28,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "TranslationKeyEnum",
    "start": 52,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Translation",
    "start": 73,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "TranslationKeyEnum",
    "start": 85,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 106,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 113,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "TranslationKeyEnum",
    "start": 128,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "TranslationKeyEnum",
    "start": 149,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "print",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 185,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "TranslationKeyEnum",
    "start": 197,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "Translation1",
    "start": 216,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
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
            "name": "Test",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./test",
        "raw": "\"./test\"",
        "start": 21,
        "end": 29
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 30
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Test",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 39
            },
            "typeArguments": null,
            "arguments": [],
            "start": 31,
            "end": 41
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "print",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 47
          },
          "optional": false,
          "computed": false,
          "start": 31,
          "end": 47
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 31,
        "end": 49
      },
      "directive": null,
      "start": 31,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 50
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
    "value": "Test",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"./test\"",
    "start": 21,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "print",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  }
]
```
