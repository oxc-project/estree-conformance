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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "svg",
                  "start": 11,
                  "end": 14
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "path",
                  "start": 15,
                  "end": 19
                },
                "start": 11,
                "end": 19
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXNamespacedName",
                    "namespace": {
                      "type": "JSXIdentifier",
                      "name": "a",
                      "start": 20,
                      "end": 21
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "b",
                      "start": 22,
                      "end": 23
                    },
                    "start": 20,
                    "end": 23
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 25,
                      "end": 26
                    },
                    "start": 24,
                    "end": 27
                  },
                  "start": 20,
                  "end": 27
                }
              ],
              "selfClosing": false,
              "start": 10,
              "end": 28
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "svg",
                  "start": 30,
                  "end": 33
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "path",
                  "start": 34,
                  "end": 38
                },
                "start": 30,
                "end": 38
              },
              "start": 28,
              "end": 39
            },
            "start": 10,
            "end": 39
          },
          "definite": false,
          "start": 6,
          "end": 39
        }
      ],
      "declare": false,
      "start": 0,
      "end": 40
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
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "svg",
                  "start": 52,
                  "end": 55
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "path",
                  "start": 58,
                  "end": 62
                },
                "start": 52,
                "end": 62
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXNamespacedName",
                    "namespace": {
                      "type": "JSXIdentifier",
                      "name": "a",
                      "start": 63,
                      "end": 64
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "b",
                      "start": 65,
                      "end": 66
                    },
                    "start": 63,
                    "end": 66
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 68,
                      "end": 69
                    },
                    "start": 67,
                    "end": 70
                  },
                  "start": 63,
                  "end": 70
                }
              ],
              "selfClosing": false,
              "start": 51,
              "end": 71
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "svg",
                  "start": 73,
                  "end": 76
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "path",
                  "start": 79,
                  "end": 83
                },
                "start": 73,
                "end": 83
              },
              "start": 71,
              "end": 84
            },
            "start": 51,
            "end": 84
          },
          "definite": false,
          "start": 47,
          "end": 84
        }
      ],
      "declare": false,
      "start": 41,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
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
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "svg",
    "start": 11,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 15,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "svg",
    "start": 30,
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
    "value": "path",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "svg",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 58,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "svg",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  }
]
```
