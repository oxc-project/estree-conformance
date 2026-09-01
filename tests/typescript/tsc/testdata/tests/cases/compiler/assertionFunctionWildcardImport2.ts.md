__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonNullable",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 24
          }
        ],
        "start": 22,
        "end": 25
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "typeArguments": null,
              "start": 31,
              "end": 32
            },
            "start": 29,
            "end": 32
          },
          "start": 26,
          "end": 32
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NonNullable",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 61
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 62,
                      "end": 63
                    },
                    "typeArguments": null,
                    "start": 62,
                    "end": 63
                  }
                ],
                "start": 61,
                "end": 64
              },
              "start": 50,
              "end": 64
            },
            "start": 50,
            "end": 64
          },
          "start": 35,
          "end": 64
        },
        "start": 33,
        "end": 64
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 78
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 92
                },
                "start": 75,
                "end": 92
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 99
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 104,
                  "end": 108
                },
                "start": 96,
                "end": 108
              },
              "start": 75,
              "end": 108
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 135
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Must not be a nullable value",
                        "raw": "\"Must not be a nullable value\"",
                        "start": 136,
                        "end": 166
                      }
                    ],
                    "start": 126,
                    "end": 167
                  },
                  "start": 120,
                  "end": 168
                }
              ],
              "start": 110,
              "end": 174
            },
            "alternate": null,
            "start": 71,
            "end": 174
          }
        ],
        "start": 65,
        "end": 176
      },
      "expression": false,
      "start": 0,
      "end": 176
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
            "name": "isNonNullable",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 204
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNonNullable",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 204
          },
          "exportKind": "value",
          "start": 191,
          "end": 204
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 178,
      "end": 207
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 208
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "isNonNullable",
    "start": 9,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 35,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 47,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 50,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "if",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 79,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 83,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 93,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 100,
    "end": 103
  },
  {
    "type": "Null",
    "value": "null",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 120,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 126,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "String",
    "value": "\"Must not be a nullable value\"",
    "start": 136,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "isNonNullable",
    "start": 191,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
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
            "name": "asserts",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 19
          },
          "start": 7,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./asserts",
        "raw": "\"./asserts\"",
        "start": 25,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 37
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 52
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 58,
                  "end": 64
                },
                {
                  "type": "TSNullKeyword",
                  "start": 67,
                  "end": 71
                }
              ],
              "start": 58,
              "end": 71
            },
            "start": 56,
            "end": 71
          },
          "start": 53,
          "end": 71
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 74,
          "end": 78
        },
        "start": 72,
        "end": 78
      },
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
                  "name": "asserts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 92
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNonNullable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 106
                },
                "optional": false,
                "computed": false,
                "start": 85,
                "end": 106
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 110
                }
              ],
              "optional": false,
              "start": 85,
              "end": 111
            },
            "directive": null,
            "start": 85,
            "end": 112
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 120
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "trim",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 125
                },
                "optional": false,
                "computed": false,
                "start": 117,
                "end": 125
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 117,
              "end": 127
            },
            "directive": null,
            "start": 117,
            "end": 128
          }
        ],
        "start": 79,
        "end": 130
      },
      "expression": false,
      "start": 39,
      "end": 130
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 130
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
    "value": "asserts",
    "start": 12,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24
  },
  {
    "type": "String",
    "value": "\"./asserts\"",
    "start": 25,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 39,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 65,
    "end": 66
  },
  {
    "type": "Null",
    "value": "null",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "isNonNullable",
    "start": 93,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "trim",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  }
]
```
