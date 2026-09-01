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
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 97
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 101
        },
        "start": 94,
        "end": 101
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
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 121
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
              },
              "declare": false,
              "start": 115,
              "end": 131
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 108,
            "end": 131
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 152,
                        "end": 158
                      },
                      "start": 150,
                      "end": 158
                    },
                    "start": 149,
                    "end": 158
                  },
                  "init": null,
                  "definite": false,
                  "start": 149,
                  "end": 158
                }
              ],
              "declare": false,
              "start": 143,
              "end": 159
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 136,
            "end": 159
          }
        ],
        "start": 102,
        "end": 161
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 76,
      "end": 161
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foobar",
        "raw": "\"foobar\"",
        "start": 178,
        "end": 186
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 211
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 215
              },
              "optional": false,
              "computed": false,
              "start": 208,
              "end": 215
            },
            "exportKind": "value",
            "start": 193,
            "end": 216
          }
        ],
        "start": 187,
        "end": 218
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 163,
      "end": 218
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foobarx",
        "raw": "\"foobarx\"",
        "start": 235,
        "end": 244
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 269
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 273
                },
                "optional": false,
                "computed": false,
                "start": 266,
                "end": 273
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              "optional": false,
              "computed": false,
              "start": 266,
              "end": 275
            },
            "exportKind": "value",
            "start": 251,
            "end": 276
          }
        ],
        "start": 245,
        "end": 278
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 220,
      "end": 278
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 76,
  "end": 279
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 76,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 84,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 108,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 115,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 136,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 163,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 171,
    "end": 177
  },
  {
    "type": "String",
    "value": "\"foobar\"",
    "start": 178,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 193,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 200,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 208,
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
    "value": "bar",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 220,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 228,
    "end": 234
  },
  {
    "type": "String",
    "value": "\"foobarx\"",
    "start": 235,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 251,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 258,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 270,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
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
        "type": "Identifier",
        "decorators": [],
        "name": "A",
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
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 46
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 50,
                              "end": 56
                            },
                            "start": 48,
                            "end": 56
                          },
                          "start": 47,
                          "end": 56
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 58,
                        "end": 60
                      },
                      "expression": false,
                      "start": 46,
                      "end": 60
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 35,
                    "end": 60
                  }
                ],
                "start": 33,
                "end": 62
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 62
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 62
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 104,
                                "end": 110
                              },
                              "start": 102,
                              "end": 110
                            },
                            "start": 101,
                            "end": 110
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 113,
                            "end": 114
                          },
                          "definite": false,
                          "start": 101,
                          "end": 114
                        }
                      ],
                      "declare": false,
                      "start": 95,
                      "end": 115
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 88,
                    "end": 115
                  }
                ],
                "start": 86,
                "end": 117
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 74,
              "end": 117
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 67,
            "end": 117
          }
        ],
        "start": 12,
        "end": 119
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 119
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 136
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 138
        },
        "optional": false,
        "computed": false,
        "start": 135,
        "end": 138
      },
      "exportKind": "value",
      "start": 120,
      "end": 139
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 140
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
    "value": "A",
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
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 35,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 74,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 88,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 95,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 120,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 127,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "MemberExpression",
        "object": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 15,
          "end": 20
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 27
        },
        "optional": false,
        "computed": false,
        "start": 15,
        "end": 27
      },
      "exportKind": "value",
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 29
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
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 56
          },
          "start": 50,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foobar",
        "raw": "\"foobar\"",
        "start": 62,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 43,
      "end": 71
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 80
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooBar",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 89
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 91
        },
        "start": 83,
        "end": 91
      },
      "importKind": "value",
      "start": 72,
      "end": 92
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "X2",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 102
          },
          "start": 100,
          "end": 102
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foobarx",
        "raw": "\"foobarx\"",
        "start": 108,
        "end": 117
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 93,
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
                  "start": 128,
                  "end": 129
                },
                "typeArguments": null,
                "start": 128,
                "end": 129
              },
              "start": 126,
              "end": 129
            },
            "start": 125,
            "end": 129
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "definite": false,
          "start": 125,
          "end": 133
        }
      ],
      "declare": false,
      "start": 119,
      "end": 134
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 147
                },
                "typeArguments": null,
                "start": 145,
                "end": 147
              },
              "start": 143,
              "end": 147
            },
            "start": 141,
            "end": 147
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "X2",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 152
          },
          "definite": false,
          "start": 141,
          "end": 152
        }
      ],
      "declare": false,
      "start": 135,
      "end": 153
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 163
          },
          "start": 162,
          "end": 163
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 169,
        "end": 174
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 155,
      "end": 175
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 186
                },
                "typeArguments": null,
                "start": 185,
                "end": 186
              },
              "start": 183,
              "end": 186
            },
            "start": 182,
            "end": 186
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 194
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 198
                },
                "optional": false,
                "computed": false,
                "start": 195,
                "end": 198
              }
            ],
            "start": 189,
            "end": 199
          },
          "definite": false,
          "start": 182,
          "end": 199
        }
      ],
      "declare": false,
      "start": 176,
      "end": 200
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooLength",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 218
          },
          "start": 209,
          "end": 218
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "\"./b\"",
        "start": 224,
        "end": 229
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 202,
      "end": 230
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooLength",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 240
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 243,
          "end": 244
        },
        "start": 231,
        "end": 244
      },
      "directive": null,
      "start": 231,
      "end": 245
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 43,
  "end": 245
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "fooBar",
    "start": 50,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 57,
    "end": 61
  },
  {
    "type": "String",
    "value": "\"foobar\"",
    "start": 62,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 72,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 79,
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
    "value": "fooBar",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 93,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 100,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 103,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"foobarx\"",
    "start": 108,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 135,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 155,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 164,
    "end": 168
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 169,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 176,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 202,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "fooLength",
    "start": 209,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 219,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"./b\"",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "fooLength",
    "start": 231,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 241,
    "end": 242
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  }
]
```
