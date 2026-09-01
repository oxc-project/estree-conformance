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
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file",
        "raw": "'file'",
        "start": 14,
        "end": 20
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 21
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Z",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 30
          },
          "start": 29,
          "end": 30
        }
      ],
      "source": {
        "type": "Literal",
        "value": "other_file",
        "raw": "'other_file'",
        "start": 36,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 22,
      "end": 49
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 68
      },
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
              "start": 73,
              "end": 84
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
                        "type": "Super",
                        "start": 93,
                        "end": 98
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 99,
                          "end": 100
                        }
                      ],
                      "optional": false,
                      "start": 93,
                      "end": 101
                    },
                    "directive": null,
                    "start": 93,
                    "end": 102
                  }
                ],
                "start": 87,
                "end": 106
              },
              "expression": false,
              "start": 84,
              "end": 106
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 73,
            "end": 106
          }
        ],
        "start": 69,
        "end": 108
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 108
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
            "start": 117,
            "end": 119
          },
          "start": 117,
          "end": 119
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file2",
        "raw": "'file2'",
        "start": 125,
        "end": 132
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 110,
      "end": 133
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "X3",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 143
          },
          "start": 141,
          "end": 143
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file3",
        "raw": "'file3'",
        "start": 149,
        "end": 156
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 134,
      "end": 157
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 165
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 175
      },
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
              "start": 180,
              "end": 191
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
                        "type": "Super",
                        "start": 200,
                        "end": 205
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 206,
                          "end": 208
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 210,
                          "end": 212
                        }
                      ],
                      "optional": false,
                      "start": 200,
                      "end": 213
                    },
                    "directive": null,
                    "start": 200,
                    "end": 214
                  }
                ],
                "start": 194,
                "end": 218
              },
              "expression": false,
              "start": 191,
              "end": 218
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 180,
            "end": 218
          }
        ],
        "start": 176,
        "end": 220
      },
      "abstract": false,
      "declare": false,
      "start": 158,
      "end": 220
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 220
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
    "type": "Identifier",
    "value": "X",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "'file'",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 22,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 31,
    "end": 35
  },
  {
    "type": "String",
    "value": "'other_file'",
    "start": 36,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 59,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 73,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 93,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 110,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 117,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 120,
    "end": 124
  },
  {
    "type": "String",
    "value": "'file2'",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 134,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 141,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 144,
    "end": 148
  },
  {
    "type": "String",
    "value": "'file3'",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 158,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 166,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 180,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 200,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  }
]
```
