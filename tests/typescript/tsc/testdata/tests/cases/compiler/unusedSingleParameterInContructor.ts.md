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
        "name": "Dummy",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "start": 18,
              "end": 29
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
                  "name": "person",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    },
                    "start": 36,
                    "end": 44
                  },
                  "start": 30,
                  "end": 44
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
                          "name": "unused",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 60,
                          "end": 66
                        },
                        "init": {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20",
                          "start": 69,
                          "end": 71
                        },
                        "definite": false,
                        "start": 60,
                        "end": 71
                      }
                    ],
                    "declare": false,
                    "start": 56,
                    "end": 72
                  }
                ],
                "start": 46,
                "end": 78
              },
              "expression": false,
              "start": 29,
              "end": 78
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 18,
            "end": 78
          }
        ],
        "start": 12,
        "end": 80
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 80
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 80
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
    "value": "Dummy",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 18,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 30,
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
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "unused",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 69,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  }
]
```
