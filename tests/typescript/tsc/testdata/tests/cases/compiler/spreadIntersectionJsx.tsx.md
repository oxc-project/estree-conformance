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
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 13,
                "end": 16
              },
              "start": 11,
              "end": 16
            },
            "start": 6,
            "end": 16
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 19,
            "end": 23
          },
          "definite": false,
          "start": 6,
          "end": 23
        }
      ],
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 35,
            "end": 37
          }
        ],
        "start": 33,
        "end": 39
      },
      "abstract": false,
      "declare": false,
      "start": 25,
      "end": 39
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 47
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 50,
            "end": 52
          }
        ],
        "start": 48,
        "end": 54
      },
      "abstract": false,
      "declare": false,
      "start": 40,
      "end": 54
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "intersected",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 73
                    },
                    "typeArguments": null,
                    "start": 72,
                    "end": 73
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 77
                    },
                    "typeArguments": null,
                    "start": 76,
                    "end": 77
                  }
                ],
                "start": 72,
                "end": 77
              },
              "start": 70,
              "end": 77
            },
            "start": 59,
            "end": 77
          },
          "init": null,
          "definite": false,
          "start": 59,
          "end": 77
        }
      ],
      "declare": false,
      "start": 55,
      "end": 78
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 90
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 94,
                "end": 97
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "intersected",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 114
                  },
                  "start": 98,
                  "end": 116
                }
              ],
              "selfClosing": true,
              "start": 93,
              "end": 119
            },
            "children": [],
            "closingElement": null,
            "start": 93,
            "end": 119
          },
          "definite": false,
          "start": 83,
          "end": 119
        }
      ],
      "declare": false,
      "start": 79,
      "end": 120
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 120
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
    "value": "React",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Null",
    "value": "null",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
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
    "value": "A",
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
    "value": "a",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 40,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "intersected",
    "start": 59,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 79,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 83,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 100,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "intersected",
    "start": 103,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  }
]
```
