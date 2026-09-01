__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
              "name": "nImported",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 22
            },
            "init": {
              "type": "Literal",
              "value": "nImported",
              "raw": "\"nImported\"",
              "start": 25,
              "end": 36
            },
            "definite": false,
            "start": 13,
            "end": 36
          }
        ],
        "declare": false,
        "start": 7,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 36
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
              "name": "nNotImported",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 62
            },
            "init": {
              "type": "Literal",
              "value": "nNotImported",
              "raw": "\"nNotImported\"",
              "start": 65,
              "end": 79
            },
            "definite": false,
            "start": 50,
            "end": 79
          }
        ],
        "declare": false,
        "start": 44,
        "end": 79
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 79
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
            "name": "nPrivate",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 94
          },
          "init": {
            "type": "Literal",
            "value": "private",
            "raw": "\"private\"",
            "start": 97,
            "end": 106
          },
          "definite": false,
          "start": 86,
          "end": 106
        }
      ],
      "declare": false,
      "start": 80,
      "end": 106
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
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nImported",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 129,
                      "end": 145
                    },
                    "start": 127,
                    "end": 145
                  },
                  "start": 125,
                  "end": 145
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nNotImported",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 170
                      },
                      "typeArguments": null,
                      "start": 151,
                      "end": 170
                    },
                    "start": 149,
                    "end": 170
                  },
                  "start": 147,
                  "end": 170
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nPrivate",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 191
                      },
                      "typeArguments": null,
                      "start": 176,
                      "end": 191
                    },
                    "start": 174,
                    "end": 191
                  },
                  "start": 172,
                  "end": 191
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 196,
                    "end": 200
                  },
                  "start": 196,
                  "end": 201
                },
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 210
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nImported",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 219,
                            "end": 228
                          },
                          "typeArguments": null,
                          "start": 212,
                          "end": 228
                        },
                        "start": 210,
                        "end": 228
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 207,
                      "end": 229
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 233
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nPrivate",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 242,
                            "end": 250
                          },
                          "typeArguments": null,
                          "start": 235,
                          "end": 250
                        },
                        "start": 233,
                        "end": 250
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 230,
                      "end": 251
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 252,
                        "end": 255
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nNotImported",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 264,
                            "end": 276
                          },
                          "typeArguments": null,
                          "start": 257,
                          "end": 276
                        },
                        "start": 255,
                        "end": 276
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 252,
                      "end": 276
                    }
                  ],
                  "start": 205,
                  "end": 278
                },
                "start": 196,
                "end": 278
              },
              "id": null,
              "generator": false,
              "start": 124,
              "end": 278
            },
            "definite": false,
            "start": 120,
            "end": 278
          }
        ],
        "declare": false,
        "start": 114,
        "end": 278
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 107,
      "end": 278
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 279
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
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "nImported",
    "start": 13,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "String",
    "value": "\"nImported\"",
    "start": 25,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "nNotImported",
    "start": 50,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"nNotImported\"",
    "start": 65,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 80,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "nPrivate",
    "start": 86,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "String",
    "value": "\"private\"",
    "start": 97,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 107,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "o",
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
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 129,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "nImported",
    "start": 136,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 151,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "nNotImported",
    "start": 158,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 176,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "nPrivate",
    "start": 183,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 193,
    "end": 195
  },
  {
    "type": "Null",
    "value": "null",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 212,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "nImported",
    "start": 219,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 235,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "nPrivate",
    "start": 242,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 257,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "nNotImported",
    "start": 264,
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
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "nImported",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nImported",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 21
          },
          "importKind": "value",
          "start": 12,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 29,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
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
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 50
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "definite": false,
            "start": 49,
            "end": 54
          }
        ],
        "declare": false,
        "start": 43,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 36,
      "end": 54
    },
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
            "start": 55,
            "end": 62
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 66
          },
          "optional": false,
          "computed": false,
          "start": 55,
          "end": 66
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nImported",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 76
          }
        ],
        "optional": false,
        "start": 55,
        "end": 77
      },
      "directive": null,
      "start": 55,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 79
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
    "value": "o",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "nImported",
    "start": 12,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 24,
    "end": 28
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 36,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "nImported",
    "start": 67,
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
    "value": ";",
    "start": 77,
    "end": 78
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 19,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 25
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
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 44
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 46
              },
              "optional": false,
              "computed": false,
              "start": 43,
              "end": 46
            },
            "definite": false,
            "start": 39,
            "end": 46
          }
        ],
        "declare": false,
        "start": 33,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 26,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 46
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
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "o",
    "start": 45,
    "end": 46
  }
]
```
