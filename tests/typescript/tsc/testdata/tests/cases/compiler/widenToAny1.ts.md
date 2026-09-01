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
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
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
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 15
          }
        ],
        "start": 13,
        "end": 16
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 23,
                    "end": 24
                  },
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
                        "start": 26,
                        "end": 27
                      },
                      "typeArguments": null,
                      "start": 26,
                      "end": 27
                    },
                    "start": 24,
                    "end": 27
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 23,
                  "end": 28
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 30
                  },
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
                        "start": 32,
                        "end": 33
                      },
                      "typeArguments": null,
                      "start": 32,
                      "end": 33
                    },
                    "start": 30,
                    "end": 33
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 29,
                  "end": 33
                }
              ],
              "start": 21,
              "end": 35
            },
            "start": 19,
            "end": 35
          },
          "start": 17,
          "end": 35
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 39
          },
          "typeArguments": null,
          "start": 38,
          "end": 39
        },
        "start": 36,
        "end": 39
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 62
            },
            "start": 46,
            "end": 63
          }
        ],
        "start": 40,
        "end": 65
      },
      "expression": false,
      "start": 0,
      "end": 65
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 74,
                "end": 80
              },
              "start": 72,
              "end": 80
            },
            "start": 70,
            "end": 80
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 87
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 90,
                      "end": 91
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 102
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 90,
                    "end": 102
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 105
                    },
                    "value": {
                      "type": "Literal",
                      "value": "def",
                      "raw": "\"def\"",
                      "start": 107,
                      "end": 112
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 104,
                    "end": 112
                  }
                ],
                "start": 88,
                "end": 114
              }
            ],
            "optional": false,
            "start": 83,
            "end": 115
          },
          "definite": false,
          "start": 70,
          "end": 115
        }
      ],
      "declare": false,
      "start": 66,
      "end": 116
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 144
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
    "value": "foo1",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
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
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "return",
    "start": 46,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 53,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 74,
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
    "value": "foo1",
    "start": 83,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 93,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "String",
    "value": "\"def\"",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  }
]
```
