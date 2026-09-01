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
        "name": "Abc",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 21,
                "end": 28
              },
              "start": 19,
              "end": 28
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
            "start": 16,
            "end": 28
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 44
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 57,
                          "end": 61
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "def",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 62,
                          "end": 65
                        },
                        "optional": false,
                        "computed": false,
                        "start": 57,
                        "end": 65
                      },
                      "right": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 68,
                        "end": 72
                      },
                      "start": 57,
                      "end": 72
                    },
                    "directive": null,
                    "start": 57,
                    "end": 72
                  }
                ],
                "start": 47,
                "end": 78
              },
              "expression": false,
              "start": 44,
              "end": 78
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 33,
            "end": 78
          }
        ],
        "start": 10,
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
    "value": "Abc",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 21,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 33,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 68,
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
