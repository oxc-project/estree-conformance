__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 28
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "./ex",
                  "raw": "'./ex'",
                  "start": 29,
                  "end": 35
                }
              ],
              "optional": false,
              "start": 21,
              "end": 36
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "optional": false,
            "computed": false,
            "start": 21,
            "end": 38
          },
          "definite": false,
          "start": 17,
          "end": 38
        }
      ],
      "declare": false,
      "start": 11,
      "end": 39
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
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 57
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "./ex",
                    "raw": "'./ex'",
                    "start": 58,
                    "end": 64
                  }
                ],
                "optional": false,
                "start": 50,
                "end": 65
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 68
              },
              "optional": true,
              "computed": false,
              "start": 50,
              "end": 68
            },
            "start": 50,
            "end": 68
          },
          "definite": false,
          "start": 46,
          "end": 68
        }
      ],
      "declare": false,
      "start": 40,
      "end": 69
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "typeArguments": null,
            "arguments": [],
            "start": 97,
            "end": 104
          },
          "definite": false,
          "start": 93,
          "end": 104
        }
      ],
      "declare": false,
      "start": 89,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 106
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "start",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 112
        },
        "optional": false,
        "computed": false,
        "start": 105,
        "end": 112
      },
      "directive": null,
      "start": 105,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 114
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "end",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 118
        },
        "optional": false,
        "computed": false,
        "start": 113,
        "end": 118
      },
      "directive": null,
      "start": 113,
      "end": 118
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 144
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 152
            },
            "typeArguments": null,
            "arguments": [],
            "start": 147,
            "end": 154
          },
          "definite": false,
          "start": 143,
          "end": 154
        }
      ],
      "declare": false,
      "start": 139,
      "end": 154
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 156
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "start",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 162
        },
        "optional": false,
        "computed": false,
        "start": 155,
        "end": 162
      },
      "directive": null,
      "start": 155,
      "end": 162
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 164
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "end",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 168
        },
        "optional": false,
        "computed": false,
        "start": 163,
        "end": 168
      },
      "directive": null,
      "start": 163,
      "end": 168
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 169
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 11,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "String",
    "value": "'./ex'",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 40,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "String",
    "value": "'./ex'",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 65,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 89,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 115,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 147,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 157,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 165,
    "end": 168
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "name": "start",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 26
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 28,
                  "end": 34
                },
                "start": 26,
                "end": 34
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 21,
              "end": 34
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "end",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 42
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 44,
                  "end": 50
                },
                "start": 42,
                "end": 50
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 39,
              "end": 50
            }
          ],
          "start": 15,
          "end": 52
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 28,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  }
]
```
