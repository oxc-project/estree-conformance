__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 15
      },
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 28
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 27,
                    "end": 28
                  }
                ],
                "start": 26,
                "end": 29
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 34
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 35,
                          "end": 36
                        },
                        "typeArguments": null,
                        "start": 35,
                        "end": 36
                      }
                    ],
                    "start": 34,
                    "end": 37
                  },
                  "start": 33,
                  "end": 37
                },
                "start": 31,
                "end": 37
              },
              "body": null,
              "expression": false,
              "start": 26,
              "end": 38
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 25,
            "end": 38
          }
        ],
        "start": 19,
        "end": 40
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 40
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 59
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 60,
            "end": 63
          }
        ],
        "start": 59,
        "end": 64
      },
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
              "start": 71,
              "end": 82
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
                        "start": 95,
                        "end": 100
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 95,
                      "end": 102
                    },
                    "directive": null,
                    "start": 95,
                    "end": 103
                  }
                ],
                "start": 85,
                "end": 109
              },
              "expression": false,
              "start": 82,
              "end": 109
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 71,
            "end": 109
          }
        ],
        "start": 65,
        "end": 111
      },
      "abstract": false,
      "declare": false,
      "start": 42,
      "end": 111
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 111
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "m",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 50,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 60,
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
    "type": "Identifier",
    "value": "constructor",
    "start": 71,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  }
]
```
