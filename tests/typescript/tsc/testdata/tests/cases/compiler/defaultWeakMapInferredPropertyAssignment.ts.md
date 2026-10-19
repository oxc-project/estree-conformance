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
            "name": "frameInfo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 15
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
                  "name": "frames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 26
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WeakMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 39
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 28,
                  "end": 41
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 20,
                "end": 41
              }
            ],
            "start": 18,
            "end": 43
          },
          "definite": false,
          "start": 6,
          "end": 43
        }
      ],
      "declare": false,
      "start": 0,
      "end": 44
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
            "name": "target",
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
                      "name": "frames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 67
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "WeakMap",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 69,
                          "end": 76
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
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
                                    "name": "id",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 79,
                                    "end": 81
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 83,
                                      "end": 89
                                    },
                                    "start": 81,
                                    "end": 89
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 79,
                                  "end": 89
                                }
                              ],
                              "start": 77,
                              "end": 91
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 93,
                              "end": 99
                            }
                          ],
                          "start": 76,
                          "end": 100
                        },
                        "start": 69,
                        "end": 100
                      },
                      "start": 67,
                      "end": 100
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 61,
                    "end": 100
                  }
                ],
                "start": 59,
                "end": 102
              },
              "start": 57,
              "end": 102
            },
            "start": 51,
            "end": 102
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "frameInfo",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 114
          },
          "definite": false,
          "start": 51,
          "end": 114
        }
      ],
      "declare": false,
      "start": 45,
      "end": 115
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 115
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "frameInfo",
    "start": 6,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "frames",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 28,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "WeakMap",
    "start": 32,
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
    "value": "}",
    "start": 42,
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
    "value": "const",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "frames",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "WeakMap",
    "start": 69,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
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
    "value": "frameInfo",
    "start": 105,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  }
]
```
