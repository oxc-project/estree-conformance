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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "start": 14,
              "end": 25
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
                  "name": "options",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 36,
                      "end": 42
                    },
                    "start": 34,
                    "end": 42
                  },
                  "start": 26,
                  "end": 42
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 58,
                          "end": 65
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 69,
                            "end": 76
                          },
                          "operator": "||",
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 80,
                            "end": 81
                          },
                          "start": 69,
                          "end": 81
                        },
                        "definite": false,
                        "start": 58,
                        "end": 82
                      }
                    ],
                    "declare": false,
                    "start": 54,
                    "end": 83
                  }
                ],
                "start": 44,
                "end": 89
              },
              "expression": false,
              "start": 25,
              "end": 89
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 89
          }
        ],
        "start": 8,
        "end": 91
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 91
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 91
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 14,
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
    "value": "options",
    "start": 26,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 54,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 69,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 77,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  }
]
```
